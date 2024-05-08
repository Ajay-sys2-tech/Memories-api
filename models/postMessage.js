import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String, 
    creator: String,
    tags: { type: [String], trim: true},
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});
postSchema.pre('save', function(next) {
    if (this.tags && Array.isArray(this.tags)) {
        this.tags = this.tags.map(tag => tag.trim());
    }
    next();
});
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;