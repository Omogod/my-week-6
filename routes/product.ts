import express, { Express, Request, Response, NextFunction } from 'express';
// import { getProducts, getProductsById, addProduct, updateProductDetails, deleteProductDetails, getRegisterPage, getLoginPage, getUpdatePage, getUpdatePageById, getAddProductPage, getProductToDelete, logout, registerUser, loginUser} from '../controllers/controller';
// import {isLoggedIn} from '../middleware/authMiddleware'
// const app = require('../app');
// import app from '../app';

const router = express.Router();


// const products = [
//     {
//         name: "Ankara",
//         image: "https://product image here",
//         brand: "Nike",
//         category: "men shoes",
//         description: "Buy this nice product",
//         price: 4200,
//         countInStock: 7,
//         rating: 6,
//         numReviews: 5,
//         },

//         {
//             name: "Sleeve",
//             image: "https://product image here",
//             brand: "Nike",
//             category: "men shoes",
//             description: "Buy this nice product",
//             price: 4200,
//             countInStock: 7,
//             rating: 6,
//             numReviews: 5,
//             },

//             {
//                 name: "Agbada",
//                 image: "https://product image here",
//                 brand: "Nike",
//                 category: "men shoes",
//                 description: "Buy this nice product",
//                 price: 4200,
//                 countInStock: 7,
//                 rating: 6,
//                 numReviews: 5,
//                 }
// ]
// router.get('/products', (req: Request, res: Response, next: NextFunction) => {
//     // let productData = getProducts
//     // console.log(productData)
//     res.status(201).render('product', {title: 'products', products})
// })

// module.exports = router;