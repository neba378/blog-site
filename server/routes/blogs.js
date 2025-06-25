import express from "express";
import Blog from "../models/blogs.js"; // Mongoose model
import multer from "multer";
import path from "path";
const blogRouter = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder where images are saved
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  },
});
const upload = multer({ storage });

// POST blog with image
blogRouter.post("/v1/blogs", upload.single("cover"), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const img_url = `/uploads/${req.file.filename}`; // public path

    const newBlog = new Blog({ title, content, author, img_url });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save blog post." });
  }
});
// Get all blogs
blogRouter.get("/v1/blogs", async (_req, res) => {
  try {
    const blogs = await Blog.find();

    const formattedBlogs = blogs.map((blog) => ({
      ...blog.toObject(),
      createdAt: new Date(blog.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    }));

    res.json(formattedBlogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog by ID
blogRouter.get("/v1/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const formattedBlog = {
      ...blog.toObject(),
      createdAt: new Date(blog.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };

    res.json(formattedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a blog by ID
blogRouter.put("/v1/blogs/:id", async (req, res) => {
  try {
    const { img_url, title, content, author, tags } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: { img_url, title, content, author, tags } },
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
