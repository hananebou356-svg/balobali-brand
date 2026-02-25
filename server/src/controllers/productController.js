import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get top rated products or new arrivals (AI basis)
// @route   GET /api/products/recommendations
// @access  Public
export const getRecommendedProducts = async (req, res, next) => {
  try {
    // Basic aggregation: randomly sample 4 products for "You may also like"
    // In a real AI layer, this would aggregate by views, tags, categories
    const products = await Product.aggregate([
      { $sample: { size: 4 } }
    ]);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
