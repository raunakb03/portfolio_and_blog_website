/* eslint-disable no-unused-vars */
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/token.js';

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
    generateToken(res, user._id);
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
    let { password: userPassword, ...responseUser } = resUser._doc;
    generateToken(res, user._id);
    return res.status(200).json({
        msg: "Logged In Successfully!!!",
        user: responseUser,
    });
});

// logout user
const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ msg: 'Logged out successfully' });
};

// get a user by id
const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    return res.status(200).json({
        msg: 'User Found',
        user
    });
})

export {
    createUser,
    loginUser,
    logoutUser,
    getUserById
}