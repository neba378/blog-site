import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  img_url: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
