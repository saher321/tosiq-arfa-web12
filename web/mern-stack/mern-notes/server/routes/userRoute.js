import express from 'express';
import { login, register } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/user/register', register)
userRoute.post('/user/login', login)

export default userRoute;