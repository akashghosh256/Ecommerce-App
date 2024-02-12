//const express = require('express');  //es5 syntax

import express from "express"; // es6 syntax
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

/*
register = http://localhost:8080/api/v1/auth/register

*/

// configure env
dotenv.config();

// database config
connectDB();


//esmodule fix for deplyment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build"))); //for offline diable this

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//web  hosting  route = for offline disable this
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// test rest api
// app.get("/", (req, res) => {
//   res.send({
//     message: "hiiiiiiiiiiiiiiiiii",
//   });
// });

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server Started at port: ${PORT} status: ${process.env.DEV_MODE}`
  );
});