"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require('http-errors');
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const method_override_1 = __importDefault(require("method-override"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
// const productRouter = require('./routes/product');
const dotENV = dotenv_1.default.config();
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const app = (0, express_1.default)();
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');
app.disable('etag');
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, "..", path.sep, 'public')));
app.use((0, method_override_1.default)('_method'));
// const products = [
//   {
//       name: "Ankara",
//       image: "https://product image here",
//       brand: "Nike",
//       category: "men shoes",
//       description: "Buy this nice product",
//       price: 4200,
//       countInStock: 7,
//       rating: 6,
//       numReviews: 5,
//       },
//       {
//           name: "Sleeve",
//           image: "https://product image here",
//           brand: "Nike",
//           category: "men shoes",
//           description: "Buy this nice product",
//           price: 4200,
//           countInStock: 7,
//           rating: 6,
//           numReviews: 5,
//           },
//           {
//               name: "Agbada",
//               image: "https://product image here",
//               brand: "Nike",
//               category: "men shoes",
//               description: "Buy this nice product",
//               price: 4200,
//               countInStock: 7,
//               rating: 6,
//               numReviews: 5,
//               }
// ]
app.use('/', index_1.default);
app.use('/users', users_1.default);
// app.use('/products', (req:Request, res:Response, next:NextFunction) => {
//   res.status(200).render('product.ejs', {products: products})
// })
// app.use('/product', productRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// app.post('/register', registerUser)
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    const errorStatusCode = err.status ? err.status : 500;
    res.status(errorStatusCode);
    res.status(err.status || 500);
});
exports.default = app;
//# sourceMappingURL=app.js.map