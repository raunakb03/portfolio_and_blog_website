/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`successfully connected to database`.yellow);
}

export default connectDb;