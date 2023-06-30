import express from 'express';
import { createUser, getUserById, loginUser, logoutUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get('/:id', getUserById);

export default router;