const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: './config/config.env'});
const connectDB = require("./config/database");


// Router оруулж ирэх
const Routes = require("./router/router");
const app = express();
app.use(express.json());
app.use("/api/v1/doctor", Routes);
connectDB()
app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);