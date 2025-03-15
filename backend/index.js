import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app =  express();
app.use(cors());



const mongoUrl = process.env.Mongo_Url;
if (!mongoUrl) {
  console.error("Mongo URL not set in .env file");
  process.exit(1);
}

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

  
app.listen(3000,()=>{
    console.log('Server is Running');
})