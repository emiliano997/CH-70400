// EJEMPLO 3 🚀

import mongoose from "mongoose";

const userCollection = "users";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role:{
        type:String,
        required: true
    }
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;