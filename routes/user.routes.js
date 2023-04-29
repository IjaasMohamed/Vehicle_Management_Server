import express from 'express';
import {
  getAllUsers,
  createUser,
  getUserInfoByID,
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers); //each route corresponds to a specific function
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;
