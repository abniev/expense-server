import express from "express";
import isAuth from "../middleware/authentication.middleware.js";
import isAdmin from "../middleware/admin.middleware.js";
import Categories from "../models/categories.model.js";

const router = express.Router();

router.post("/", isAuth, isAdmin, async (req, res) => {
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

export default router;
