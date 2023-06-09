import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    DislikeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// exporting a model from the PostMessage message file
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;