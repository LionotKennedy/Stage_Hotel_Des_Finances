const Category = require("../models/Category");

const { validationResult } = require("express-validator");

// ############### ADD CATEGORY #################//
const addCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { category_name } = req.body;

    const isExists = await Category.findOne({
      name: {
        $regex: category_name,
        $options: "i",
      },
    });

    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = new Category({
      name: category_name,
    });

    const categoryData = await category.save();
    return res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### GET CATEGORY #################//
const getCategory = async (req, res) => {
  try {
    const categoryData = await Category.find();
    return res.status(200).json({
      success: true,
      message: "Category Fetched successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### DELETE CATEGORY #################//
const deleteCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id } = req.body;

    const categoryFindData = await Category.findOne({ _id: id });

    if (!categoryFindData) {
      return res.status(404).json({
        success: false,
        message: "Category ID doesn't exists",
      });
    }

    const categoryData = await Category.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

// ############### UPDATE CATEGORY #################//
const updateCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: true,
        message: "Errors",
        errors: errors.array(),
      });
    }

    const { id, category_name } = req.body;

    const updatedData = await Category.findOne({ _id: id });

    if (!updatedData) {
      return res.status(400).json({
        success: false,
        message: "Category ID doesn't exists",
      });
    }

    const isExists = await Category.findOne({
        _id: { $ne: id },
      name: {
        $regex: category_name,
        $options: "i",
      },
    });

    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "Category already assigned to another category",
      });
    }

    const categoryData = await Category.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: category_name,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: categoryData,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// ############### ENDING #################//

module.exports = { addCategory, getCategory, deleteCategory, updateCategory };
