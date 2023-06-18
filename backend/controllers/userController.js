/* eslint-disable no-unused-vars */
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

//create new user
const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const doesUserExists = await User.findOne({ email });
    if (doesUserExists) {
        res.status(404);
        throw new Error("User Already Exists");
    }
    const user = new User({
        name,
        email,
        password
    });

    await user.save();
    return res.status(200).json({
        msg: "User Created Successfully!!!",
        user
    });
});

// login user
const loginUser = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error("Invalid Credentials");
    }
    const isMatched = await user.matchPassword(password);
    if (!isMatched) {
        res.status(404);
        throw new Error("Invalid Credentials");
    }
    let { password: enteredPassword, ...resUser } = user;
    return res.status(200).json({
        msg: "Logged In Successfully!!!",
        user:resUser._doc,
    });
});


export {
    createUser,
    loginUser,
}