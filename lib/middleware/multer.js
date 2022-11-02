"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSizeLimitErrorHandler = exports.upload = void 0;
// const path = require("path");
// const multer = require("multer");
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const fileSizeLimitErrorHandler = (err, req, res, next) => {
    if (err) {
        next(err);
    }
    else {
        next();
    }
};
exports.fileSizeLimitErrorHandler = fileSizeLimitErrorHandler;
//set the storage Engine
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, "../public/uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname +
            "-" +
            new Date().toISOString().replace(/:/g, "-") +
            path_1.default.extname(file.originalname));
    },
});
//check file type 
function checkFileType(file, cb) {
    //allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext 
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    //check mime 
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb({ message: "Error: Images Only" });
    }
}
//init upload
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 2000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});
exports.upload = upload;
//# sourceMappingURL=multer.js.map