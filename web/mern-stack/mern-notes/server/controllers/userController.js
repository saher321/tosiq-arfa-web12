import bcrypt from "bcryptjs";
import validator from 'validator';
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await User.findOne({email});
        if (user) {
            return res.send({status: false, message: "This email is already in use"})
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
            return res.send({status: true, message: "User registration successful", user})            
        } else {
            return res.send({status: false, message: "Registration failed"})
        }

    } catch (error) {
        return res.send({status: false, message: "Something went wrong"})        
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await User.findOne({email});
        if (!user) {
            return res.send({status: false, message: "User not found with this email"})
        }

        // compare password (encrypted password)
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.send({status: false, message: "Password didn't matched"})
        }
        
        const userToken = jwt.sign({
            userId: user?._id,
            userEmail: user?.email
        }, process.env.JWT_SECRET, { expiresIn: '7d'})
        

        if (userToken) {
            return res.cookie("userToken", userToken).send({status: true, message: "User loggedin successful", userToken})            
        } else {
            return res.send({status: false, message: "Logging failed"})
        }

    } catch (error) {
        return res.send({status: false, message: "Something went wrong"})        
    }
}