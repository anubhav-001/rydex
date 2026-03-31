import mongoose, { Document } from "mongoose";

interface Iuser extends Document{
    name : string;
    email : string;
    role : "user" | "partner" | "admin";
    password : string;
    createdAt : Date;
    updatedAt : Date;
}

const userSchema = new mongoose.Schema<Iuser>({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        default : "user",
        enum : ["user","partner","admin"]
    },
    password : {
        type : String,
    }

},{timestamps : true});

const User = mongoose.models.User ||  mongoose.model("User", userSchema); 
export default User;