import express from "express";

import {
  getItems,
  addItem,
  deleteItem,
  updateItem
} from "../controllers/itemController.js";

const router = express.Router();

// GET all items
router.get("/items", getItems);

// ADD new item
router.post("/items", addItem);

// DELETE item
router.delete("/items/:id", deleteItem);

// UPDATE item
router.put("/items/:id", updateItem);

export default router;