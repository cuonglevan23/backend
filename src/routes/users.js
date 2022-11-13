import express from 'express';
import { getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUsers);

router.post('/update', updateUser);

export default router;