import express from 'express'

const router=express.Router();

import { getCategory,getCategoryById } from '../controller/categoryController.js';

router.route('/').get(getCategory);
router.route('/:id').get(getCategoryById);

export default router