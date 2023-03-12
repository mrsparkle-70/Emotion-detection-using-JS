import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number,
    gender: String
});

const User = mongoose.model('user', userSchema);

export default User;