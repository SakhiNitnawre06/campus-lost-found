import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemName: String,
  category: String,
  description: String,
  location: String,
  status: { type: String, default: "Lost" },
  priority: String,
  contactInfo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Item", ItemSchema);