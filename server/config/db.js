import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

// MongoDB connection setup
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/blogDB";

const connectDB = async () => {
  // console.log("Connecting to MongoDB...", MONGO_URI);
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export { connectDB };
