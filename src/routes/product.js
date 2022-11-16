import express from 'express';
import { getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getProduct);

router.post('/', createProduct);

router.post('/update', updateProduct);

export default router;