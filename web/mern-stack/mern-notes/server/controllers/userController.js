import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

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