import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {fetchUsersData} from '../utils/utils';
import dotenv from 'dotenv';


const dotEnv = dotenv.config()
const secret = process.env.JWT_SECRET as string

// import { IGetUserAuthInfoRequest } from "../request";


export const isLoggedIn = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.cookies.token) {
        try {
            token = req.cookies.token;
            if (process.env.JWT_SECRET) {
                const decoded = jwt.verify(token, secret);
                
                const allData = await fetchUsersData();
                
                if (typeof(decoded) !== 'string') {
                    req.user = allData.find((user) => user.id === decoded.id);
                }
                next();
            }
            
        }
        catch (error) {
            console.error(error);
            res.status(404);
            throw new Error('Not authorized, token failed');
        }
    }
    else if (( (req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer')))) {
        try{
            token = req.headers.authorization.split(' ')[1];
            if(process.env.JWT_SECRET){
                const decoded = jwt.verify(token, secret);

                const allData = await fetchUsersData();

                if (typeof(decoded) !== 'string') {
                    req.user = allData.find((user) => user.id === decoded.id);
                    console.log(req.user);
                }
                next();
            }
        } catch (error) {
            res.status(404);
            throw new Error('Not authorized, token failed');
        }
    }
    if(!token){
        res.status(401);
        res.redirect('/login');
        // throw new Error('Not authorized, no token');
    }
});



// import express, { Request, Response, NextFunction } from "express";
// import httpStatus from "http-status";
// import jwt from "jsonwebtoken";
// const secret = process.env.JWT_SECRET as string;
// export async function isLoggedIn(
//   req: Request | any,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const token = req.headers.token;
//     if (!token) {
//       res.status(httpStatus.UNAUTHORIZED).json({
//         Error: "Kindly sign in as a Doctor",
//       });
//       return;
//     }
//     let verified = jwt.verify(token, secret);
//     if (!verified) {
//       return res
//         .status(httpStatus.UNAUTHORIZED)
//         .json({ Error: "Doctor not verify, you can access this route" });
//     }
//     next();
//   } catch (error) {
//     return res
//       .status(httpStatus.FORBIDDEN)
//       .json({ Error: "Doctor is not not logged in" });
//   }
// }