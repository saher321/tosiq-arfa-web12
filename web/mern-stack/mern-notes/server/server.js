import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import notesRoute from './routes/notesRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app       = express();
app.use(express.json());
app.use(cors());

const PORT      = process.env.PORT || 5000;
const PREFIX    = '/api/v1';


app.get('/', (req, res) => {
    res.send("Hello from server")
});


app.use(PREFIX, userRoute)
app.use(PREFIX, notesRoute)

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    });
});

// 5 products (name, description, price, rating, category)