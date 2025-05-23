import express from 'express';
import { getProducts, getProductById, searchProducts, getProductReviews, deleteProductReview } from '../controllers/productController';


const productRouter = express.Router();

productRouter.get('/search', searchProducts);
productRouter.get('/', getProducts);
productRouter.get('/:productId', getProductById);

/**review endpoints**/
productRouter.get('/:productId/reviews', getProductReviews)
productRouter.delete('/:productId/reviews/:id', deleteProductReview)


export default productRouter;
