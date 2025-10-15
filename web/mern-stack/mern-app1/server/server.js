// express, dotenv, nodemon, cors, mongoose
// npm init -y
// npm i express dotenv
// npm i -D nodemon
// package.json -> "type": "module"
// package.json -> "dev": "nodemon server.js"
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', ( req, res ) => {
    res.send("Hello from server")
});
app.get('/test', ( req, res ) => {
    res.send("This is test endpoint 1")
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});