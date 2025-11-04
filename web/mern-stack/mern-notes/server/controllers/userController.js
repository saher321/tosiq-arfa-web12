import bcrypt from "bcryptjs";
import validator from 'validator';
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmail.js";

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