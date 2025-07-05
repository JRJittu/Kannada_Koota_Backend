import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, enum: ["image", "video"], required: true },
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Gallery", gallerySchema);
