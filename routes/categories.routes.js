import express from "express";
// import isAuth from "../middleware/authentication.middleware.js";
// import isAdmin from "../middleware/admin.middleware.js";
import Categories from "../models/categories.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { type, color } = req.body;
    const categoryData = { type, color };

    for (const property in categoryData) {
      if (!categoryData[property]) {
        delete categoryData.property;
      }
    }

    const categories = await Categories.create(categoryData);

    res
      .status(201)
      .json({ message: "Category created successfully", categories });
  } catch (error) {
    console.log("error creating category", error);
    res.status(500).json(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allCategories = await Categories.find({});

    res.status(200).json(allCategories);
  } catch (error) {
    console.log("error fetching categories", error);
    res.status(500).json({ message: "Error fetching categories", error });
  }
});

export default router;

router.get("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Categories.findbyId(categoryId).populate({});
    res.json(category);
  } catch (error) {
    console.log("error fetching single category", error);
  }
});
