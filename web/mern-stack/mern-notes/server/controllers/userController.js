import bcrypt from "bcryptjs";
import validator from 'validator';
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmail.js";
import { generateOTP } from "../utils/generateOTP.js";


export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, code: 302, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await User.findOne({email});
        if (user) {
            return res.send({status: false, code: 777, message: "This email is already in use"})
        }

        // hash password (encrypted password)
        const salt = await bcrypt.genSalt(10);
        const myHashPassword = await bcrypt.hash(password, salt);

        // new user OJB
        user = new User({
            name,
            email,
            password: myHashPassword
        });
        const result = await User.create(user);

        if (result) {
            return res.send({status: true, code: 200, message: "User registration successful", user})       
        } else {
            return res.send({status: false, message: "Registration failed"})
        }

    } catch (error) {
        return res.send({status: false, code: 500, message: "Something went wrong"})        
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, code: 302, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await User.findOne({email});
        if (!user) {
            return res.send({status: false, code: 404, message: "User not found with this email"})
        }

        // compare password (encrypted password)
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.send({status: false, code: 402, message: "Password didn't matched"})
        }
        
        const content = `
        <h1>You have successfully loggedin to our system</h1>
        `;

        const userToken = jwt.sign({
            userId: user?._id,
            userEmail: user?.email
        }, process.env.JWT_SECRET, { expiresIn: '7d'})
        

        if (userToken) {
            sendEmail('pnymeet@gmail.com', "Login Successful! ✨🎉", content)
            return res.send({status: true, code: 200, message: "User loggedin successful", userToken})            
        } else {
            return res.send({status: false, message: "Logging failed"})
        }

    } catch (error) {
        return res.send({status: false, message: "Something went wrong"})        
    }
}

export const sendOTP = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.send({status: false, message: "Email is not provided"})

    try {
        const user = await User.findOne({email})
        if (!user) return res.send({status: false, code: 404, message: "User not found"});
        
        let otp = generateOTP();

        const content = `
        Hi ${user.name}, 
        This is your requested OTP: 
        <h3>${otp}</h3>

        Don't share this one time password (OTP) to anyone
        `;

        sendEmail(user.email, "OTP for reset passsword", content);

        user.otp = otp;
        user.isVerified = false;
        await user.save();

        return res.send({status: true, code: 200, message: "OTP has been send to your email"})

    } catch (error) {
        console.log("Error: ", error)
    }
}

export const verifyOTP = async (req, res) => {
    const {email, otp} = req.body;

    if (!otp) return res.send({status: false, message: "OTP is not provided"})
    try {
        const user = await User.findOne({email})
        if (!user) return res.send({status: false, message: "User not found"});

        if (otp != user.otp) return res.send({status: false, message: "OTP is not valid"});

        user.otp = null;
        user.isVerified = true;
        await user.save();
        return res.send({status: true, message: "Verified successful"})

    } catch (error) {
        console.log("Error: ", error)
    }
    
}

export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // check if email is exist
        let user = await User.findOne({email});
        if (!user) {
            return res.send({status: false, code: 777, message: "User not found with this email"})
        }

        // hash password (encrypted password)
        const salt = await bcrypt.genSalt(10);
        const myHashPassword = await bcrypt.hash(newPassword, salt);

        // new password
        user.password = myHashPassword;
        const ok = await user.save();

        if (ok) {
            return res.send({status: true, code: 200, message: "Password reset was successful", user})       
        } else {
            return res.send({status: false, message: "Failed to reset password"})
        }

    } catch (error) {
        return res.send({status: false, code: 500, message: "Something went wrong"})        
    }
}