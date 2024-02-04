import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";




dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB');
}).catch((e) => {
    console.log(e);
});

const app = express();

// app.use(express.urlencoded({ extended: true }))
app.use(express.json());   // allow to see json in console

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
