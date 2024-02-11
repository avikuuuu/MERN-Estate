import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashPassword = bcryptjs.hashSync(password, 10); //encypt password
  const newUser = new User({ username, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json("user created sucessfully");
  } catch (error) {
    next(error);
    // next(errorHandler(500,'error by function'))
  }
};

// login user and return jwt token
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const userPassword = bcryptjs.compareSync(password, validUser.password);
    if (!userPassword) {
      return next(errorHandler(403, "wrong credentials!"));
    }
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    const { password:pass,...rest}=validUser._doc;   //this use hide password
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
