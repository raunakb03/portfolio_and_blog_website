/* eslint-disable no-undef */
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    blogContent: {
        type: Object,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true,
});

export default mongoose.model("blog", BlogSchema);