import Item from "../models/Item.js";

// GET ALL
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ADD
export const addItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json({ msg: "Item Added" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
export const updateItem = async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "Updated" });
  } catch (err) {
    res.status(500).json(err);
  }
};