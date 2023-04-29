const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: './config/config.env'});
const connectDB = require("./config/database");
const cors = require("cors");


// Router оруулж ирэх
const Routes = require("./router/router");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", Routes);
connectDB()
app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);