const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require('./Routers/auth');
const profileRouter = require('./Routers/profile');
const requestRouter = require('./Routers/request');
const userRouter = require("./Routers/user");

app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);
app.use('/', userRouter)

connectDB()
  .then(() => {
    console.log("successfully connection establised..");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err)
    console.log("Connection failed!!");
  });
