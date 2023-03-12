import mongoose from "mongoose";

const Connection = () => {
    const MONGODB_URI = "mongodb://127.0.0.1:27017/EmotionDetectionJS"

    mongoose.set('strictQuery', false);
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    })
    mongoose.connection.on('disconnected', () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log('Error connecting the database');
    })
}

export default Connection;