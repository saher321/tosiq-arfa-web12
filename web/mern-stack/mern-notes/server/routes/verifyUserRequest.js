import express from 'express'
import jwt from 'jsonwebtoken'

const verifyUserRequest = express.Router();

verifyUserRequest.get('/user/verify', (req, res) => {
    const token = req.headers?.authorization;
    try {
        const myToken = token.split(" ")[1];
        const verifiedUser = jwt.verify(myToken, process.env.JWT_SECRET)
        return res.send({status: true, user: verifiedUser })
    } catch (error) {
        console.log("Something went wrong ", error)
    }
})

export default verifyUserRequest