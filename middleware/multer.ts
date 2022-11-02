// const path = require("path");
// const multer = require("multer");
import path from "path";
import multer from "multer";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

const fileSizeLimitErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) =>{
    if (err) {
        next(err);
    } else {
        next();
    }
};

//set the storage Engine

const storage = multer.diskStorage({
    destination: function(req : Request, file, cb) {
        cb(null, path.join(__dirname, "../public/uploads"))
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname +
            "-" +
            new Date().toISOString().replace(/:/g, "-") +
            path.extname(file.originalname)
        );
    },
});

//check file type 
function checkFileType(file:any, cb:any) {
    //allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext 
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime 
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb({message: "Error: Images Only"})
    }

}

//init upload

const upload = multer({
    storage: storage,
    limits: {fileSize:2000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file,cb)
    },
});

// module.exports = {upload, fileSizeLimitErrorHandler}
export {upload, fileSizeLimitErrorHandler}