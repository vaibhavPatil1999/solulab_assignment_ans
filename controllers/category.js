import { category, Schema } from "../models/category.js";

const fetchCategory = async (req, res) => {
  try {
    const categories = await category.findAll();
    if (categories.length <= 0) {
      return res
        .status(400)
        .json({ message: "no categories available at this time" });
    }
    return res.status(200).json({ suc: true, categories });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const createCategory = async (req, res) => {
  const validCategoryDetails = Schema.validate(req.body);
  if (validCategoryDetails.error) {
    return res.status(402).send(validCategoryDetails.error.message);
  }
  try {
    const { categoryId, categoryName } = req.body;
    const categoryAdded = await category.create({
      categoryId,
      categoryName,
    });
    return res.status(200).json({ suc: true, categoryAdded });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;
    const result = await category.update(
      {
        categoryName,
      },
      { where: { id: id } }
    );
    if (result[0] === 0) {
      return res
        .status(400)
        .json({ suc: false, message: "there is no category with this id" });
    }
    return res.status(200).json({ suc: true, status: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await category.destroy({ where: { id: id } });
    if (result === 0) {
      return res
        .status(400)
        .json({ suc: false, message: "there is no category with this id" });
    }
    return res.status(200).json({ suc: true, status: " category deleted" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

export { createCategory, updateCategory, deleteCategory, fetchCategory };
