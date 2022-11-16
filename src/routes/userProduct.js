import express from 'express';
import  getUserProduct  from '../controllers/userproduct.js';

const router = express.Router();

router.get('/', getUserProduct);


export default router;