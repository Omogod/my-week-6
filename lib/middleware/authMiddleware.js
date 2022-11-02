"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const utils_1 = require("../utils/utils");
const dotenv_1 = __importDefault(require("dotenv"));
const dotEnv = dotenv_1.default.config();
const secret = process.env.JWT_SECRET;
// import { IGetUserAuthInfoRequest } from "../request";
exports.isLoggedIn = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.cookies.token) {
        try {
            token = req.cookies.token;
            if (process.env.JWT_SECRET) {
                const decoded = jsonwebtoken_1.default.verify(token, secret);
                const allData = yield (0, utils_1.fetchUsersData)();
                if (typeof (decoded) !== 'string') {
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
    else if (((req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer')))) {
        try {
            token = req.headers.authorization.split(' ')[1];
            if (process.env.JWT_SECRET) {
                const decoded = jsonwebtoken_1.default.verify(token, secret);
                const allData = yield (0, utils_1.fetchUsersData)();
                if (typeof (decoded) !== 'string') {
                    req.user = allData.find((user) => user.id === decoded.id);
                    console.log(req.user);
                }
                next();
            }
        }
        catch (error) {
            res.status(404);
            throw new Error('Not authorized, token failed');
        }
    }
    if (!token) {
        res.status(401);
        res.redirect('/login');
        // throw new Error('Not authorized, no token');
    }
}));
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
//# sourceMappingURL=authMiddleware.js.map