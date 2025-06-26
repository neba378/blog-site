import express from "express";
import Blog from "../models/blogs.js"; // Mongoose model
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const blogRouter = express.Router();

blogRouter.use(fileUpload());

blogRouter.use(express.json());
blogRouter.use(express.urlencoded({ extended: true }));
blogRouter.use(express.static("public"));

// Create a new blog
blogRouter.post("/v1/blogs", async (req, res) => {
  try {
    const file = req.files?.files;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Ensure uploads directory exists
    const uploadDir = __dirname + "/../uploads";

    const filePath = `${uploadDir}/${file.name}`;

    console.log("File path:", filePath);

    await file.mv(filePath);

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(filePath);

    const img_url = uploadResult.url;

    const { title, content, author, tags } = req.body;
    const newBlog = new Blog({ img_url, title, content, author, tags });
    await newBlog.save();

    fs.unlinkSync(filePath);

    res.status(201).json({
      message: "blog added",
      img_url,
      blog: newBlog,
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(400).json({ message: err.message });
  }
});

// Get all blogs
blogRouter.get("/v1/blogs", async (_req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog by ID
blogRouter.get("/v1/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a blog by ID
blogRouter.put("/v1/blogs/:id", async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: { title, content, author, tags } },
      { new: true, runValidators: true }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog by ID
blogRouter.delete("/v1/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default blogRouter;
