const mongoose = require("mongoose");

let blogschema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required:true
        },
        author: {
            type: String,
            trim: true,
            required:true
        },
        comment: {
            type: String,
            trim: true,
            required:true
        }
    }
)
const Blog = mongoose.model('Blog', blogschema);

module.exports = Blog;