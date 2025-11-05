import express from 'express';
import { login, register, resetPassword, sendOTP, verifyOTP } from '../controllers/userController.js';
import User from '../models/userModel.js';

const userRoute = express.Router();

userRoute.post('/user/register', register)
userRoute.post('/user/login', login)

// users
userRoute.get("/users", async (req, res) => {
    const users = await User.find({});
    return res.send({status: true, users})
})
// ---------
userRoute.post('/user/send-otp', sendOTP);
userRoute.post('/user/verify-otp', verifyOTP);
userRoute.post('/user/reset-password', resetPassword);

export default userRoute;