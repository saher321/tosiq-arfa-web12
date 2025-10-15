import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_LOCAL);
        if (db) {
            console.log("Database connected: " + db.connection.host)
        } else {
            console.log("Err: Database isn't connected");
        }
    } catch (err) {
        console.log("Something went wrong: "+ err);
    }
}