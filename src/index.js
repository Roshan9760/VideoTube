import express from "express";
import mongoose from "mongoose";
const app = express();


app.listen(process.env.PORT ,(res)=>{

    console.log(`App is Running at ${process.env.PORT}`)
})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()