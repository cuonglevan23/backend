import express from 'express';
import  getTelecom  from '../controllers/telecom.js';

const router = express.Router();

router.get('/', getTelecom);


export default router;