import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import blogRouter from "./routes/blogs.js";
import path from "path";

const app = express();

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

(async () => {
  await connectDB();
})();

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.use("/api", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
