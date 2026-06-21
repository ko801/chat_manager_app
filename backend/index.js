const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path: path.join(__dirname, ".env")});
const express=require("express");
const app=express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("app is listening")
});

app.get("/",(req,res)=>{
    res.send("this is my root route");
});