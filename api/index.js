import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.router.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB');
}).catch((e) => {
    console.log(e);
});

const app = express();

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});

app.use('/api/user', userRouter);
