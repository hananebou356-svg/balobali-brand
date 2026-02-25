import express from 'express';
import {
  getProducts,
  getProductById,
  getRecommendedProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/recommendations').get(getRecommendedProducts);
router.route('/:id').get(getProductById);

export default router;
