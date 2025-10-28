import express from 'express';
import { register } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/user/register', register)

export default userRoute;