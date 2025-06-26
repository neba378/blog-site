"use client";

import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [markdown, setMarkdown] = useState<string>("");
  const [tagsInput, setTagsInput] = useState<string>(""); // comma separated tags string
  const [imgURL, setImgURL] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }
    setSelectedFile(file);
    setError(null);
  };

  const savePost = async () => {
    if (!selectedFile) {
      setError("Please select a cover image.");
      return;
    }
    setUploading(true);
    setError(null);

    // Convert tagsInput string to array (trim whitespace, ignore empty)
    const tagsArray = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("content", markdown);
      formData.append("cover", selectedFile);
      // Send tags as JSON string, backend should parse this accordingly
      formData.append("tags", JSON.stringify(tagsArray));

      const res = await fetch(
        "https://blog-site-f3i2.onrender.com/api/v1/blogs",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save post");
      }

      const data = await res.json();
      setImgURL(data.img_url);
      alert("Post saved successfully!");
      console.log("Saved post:", data);

      // Reset form
      setTitle("");
      setAuthor("");
      setMarkdown("");
      setTagsInput("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError("Failed to save post. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create a Blog Post</h1>

      {/* Title */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />
      </div>

      {/* Author */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />
      </div>

      {/* Tags */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="tags">Tags (comma separated):</label>
        <input
          id="tags"
          type="text"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="e.g. web development, MVC, backend"
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />
      </div>

      {/* Cover Image */}
      <div style={{ marginBottom: "20px" }}>
        <label>Cover Image:</label>
        <input
          type="file"
          accept="image/*"
          name="files"
          onChange={handleImageChange}
          ref={fileInputRef}
          disabled={uploading}
        />
        {uploading && <span> Uploading... </span>}
        {error && <span style={{ color: "red" }}>{error}</span>}
        {imgURL && (
          <div style={{ marginTop: "10px" }}>
            <Image
              src={imgURL}
              alt="Cover"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
        )}
      </div>

      {/* Markdown Editor */}
      <textarea
        rows={10}
        cols={50}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your post in Markdown..."
        style={{ width: "100%", marginBottom: "20px" }}
      />

      {/* Save Button */}
      <button
        onClick={savePost}
        style={{ margin: "20px 0" }}
        disabled={uploading}
      >
        Save Post
      </button>

      {/* Preview */}
      <h2>Preview</h2>
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
