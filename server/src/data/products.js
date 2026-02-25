import fetch from 'node-fetch';
import fs from 'fs';

// Helper function to fetch images via Unsplash
const generatePlaceholderImage = async (query) => {
  // Not generating real AI images right now (to avoid API keys limits), 
  // relying on Unsplash for luxurious demo imagery
  return `https://source.unsplash.com/800x1200/?luxury,${query},fashion`;
};

const products = [
  {
    name: 'Midnight Silk Pajama Set',
    description: 'Experience unparalleled comfort with our signature midnight silk pajama set. Crafted from 100% pure mulberry silk, this piece redefines luxury loungewear.',
    category: 'Pajamas',
    price: 320,
    compareAtPrice: 400,
    countInStock: 15,
    tags: ['silk', 'midnight', 'set', 'pajamas'],
    query: 'silk,pajamas'
  },
  {
    name: 'Ivory Lounge Robe',
    description: 'Wrap yourself in the cloud-like softness of our Ivory Lounge Robe. The perfect layer for brisk mornings and relaxing evenings.',
    category: 'Loungewear',
    price: 250,
    compareAtPrice: 280,
    countInStock: 8,
    tags: ['ivory', 'robe', 'lounge'],
    query: 'robe,white'
  },
  {
    name: 'Cashmere Sleep Mask',
    description: 'Block out the world in absolute comfort. Made from pure Mongolian cashmere with silk lining for the utmost care of your skin.',
    category: 'Accessories',
    price: 85,
    countInStock: 30,
    tags: ['cashmere', 'mask', 'sleep'],
    query: 'sleepmask,cashmere'
  },
  {
    name: 'Onyx Silk Slip',
    description: 'Seamlessly transition from lounging to sleeping with our Onyx Silk Slip. A minimalist design focusing entirely on the drape and feel of the fabric.',
    category: 'Sleepwear',
    price: 180,
    countInStock: 20,
    tags: ['onyx', 'silk', 'slip'],
    query: 'silk,dress,black'
  },
  {
    name: 'Rose Gold Lounge Set',
    description: 'A two-piece lounge set in a stunning rose gold hue. High breathability and a luminous finish.',
    category: 'Loungewear',
    price: 275,
    countInStock: 12,
    tags: ['rose', 'gold', 'set'],
    query: 'silk,pink,pajama'
  },
  {
    name: 'Velvet Soft Slippers',
    description: 'Step into pure luxury. Memory foam core wrapped in plush velvet for the ultimate indoor footwear.',
    category: 'Accessories',
    price: 110,
    countInStock: 50,
    tags: ['velvet', 'slippers', 'footwear'],
    query: 'slippers,velvet'
  },
  {
    name: 'Emerald Silk Trousers',
    description: 'Fluid, elegant, and impossibly soft. These silk trousers can be worn in bed or softly styled for a relaxed evening look.',
    category: 'Loungewear',
    price: 195,
    compareAtPrice: 220,
    countInStock: 5,
    tags: ['emerald', 'silk', 'trousers'],
    query: 'silk,trousers,green'
  },
  {
    name: 'Pearl Button-down Sleep Shirt',
    description: 'An oversized, boyfriend-style sleep shirt crafted from our proprietary brushed cotton-silk blend.',
    category: 'Sleepwear',
    price: 150,
    countInStock: 25,
    tags: ['pearl', 'shirt', 'sleep'],
    query: 'sleepshirt,white'
  },
  {
    name: 'Satin Edge Pillowcase Set',
    description: 'Protect your skin and hair while you sleep. A set of two premium satin pillowcases.',
    category: 'Accessories',
    price: 95,
    countInStock: 40,
    tags: ['satin', 'pillowcase', 'set'],
    query: 'pillowcase,satin'
  },
  {
    name: 'The Ultimate Cashmere Throw',
    description: 'The definitive luxury accessory for your bedroom or living room. Generously sized and unbelievably warm.',
    category: 'Home',
    price: 450,
    compareAtPrice: 550,
    countInStock: 3,
    tags: ['cashmere', 'throw', 'blanket'],
    query: 'throw,blanket,cashmere'
  }
];

export default products;
