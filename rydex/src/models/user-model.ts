import mongoose, { Document } from "mongoose";

export interface Iuser extends Document{
    name : string;
    email : string;
    role : "user" | "partner" | "admin";
    isEmailVerified? : boolean;
    otp? : string;
    otpExpiresAt? : Date;
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
    },
    isEmailVerified : {
        type : Boolean,
        default : false
    },
    otp:{
        type : String
    },
    otpExpiresAt : {
        type : Date
    }

},{timestamps : true});

const User = mongoose.models.User ||  mongoose.model("User", userSchema); 
export default User;