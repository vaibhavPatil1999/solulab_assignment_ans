import { products, Schema } from "../models/products.js";
import {
  fetchProduct,
  fetchByCategory,
  fetchAll,
} from "../controllers/service.js";

const createProducts = async (req, res) => {
  const validProductDetails = Schema.validate(req.body);
  if (validProductDetails.error) {
    return res.status(402).send(validProductDetails.error.message);
  }
  try {
    const {
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    } = req.body;
    const productAdded = await products.create({
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    });
    return res.status(200).json({ suc: true, productAdded });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

/**
 * note - fetchAll ,fetchProduct , fetchBycategory are some of the function used to read
 *  data , and avoide complexicity of code so i provide them in service.js file
 */
const fetchAllProducts = async (req, res) => {
  try {
    const allProducts = await fetchAll();
    if (allProducts.length <= 0) {
      return res
        .status(400)
        .json({ message: "no products available at this time" });
    }
    return res.status(200).json({ suc: true, allProducts });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const fetchProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await fetchProduct(productId);
    if (product === null) {
      return res
        .status(400)
        .json({ message: "no products available with this ID" });
    }
    return res.status(200).json({
      suc: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const fetchProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const product = await fetchByCategory(categoryId);
    if (product.length <= 0) {
      return res
        .status(400)
        .json({ message: "no product available with this category" });
    }
    return res.status(200).json({ suc: true, product });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const updateProductByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const {
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    } = req.body;
    const product = await products.update(
      {
        productName,
        qtyPerUnit,
        unitPrice,
        unitInStock,
        discontinued,
        categoryId,
      },
      { where: { productId: productId } }
    );
    if (product[0] === 0) {
      return res
        .status(400)
        .json({ suc: false, message: "there is no product with this id" });
    }
    return res.status(200).json({ suc: true, status: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const updateProductByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { productName, qtyPerUnit, unitPrice, unitInStock, discontinued } =
      req.body;
    const product = await products.findAll({
      where: { categoryId: categoryId },
    });
    if (product.length <= 0) {
      return res
        .status(400)
        .json({ message: "no products available with this category" });
    }
    await products.update(
      {
        productName,
        qtyPerUnit,
        unitPrice,
        unitInStock,
        discontinued,
        categoryId,
      },
      { where: { categoryId: categoryId } }
    );
    return res
      .status(200)
      .json({ suc: true, status: "all products updated of this category" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const deleteProductByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await products.destroy({ where: { productId: productId } });
    if (product === 0) {
      return res
        .status(400)
        .json({ suc: false, message: "there is no product with this id" });
    }
    return res.status(200).json({ suc: true, status: "deleted" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const deleteProductByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const result = await products.destroy({
      where: { categoryId: categoryId },
    });
    if (result === 0) {
      return res
        .status(400)
        .json({ suc: false, message: "there is no product with this category" });
    }
    return res
      .status(200)
      .json({ suc: true, status: "all products deleted of this category" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

export {
  createProducts,
  fetchAllProducts,
  fetchProductById,
  fetchProductByCategory,
  updateProductByProductId,
  updateProductByCategoryId,
  deleteProductByProductId,
  deleteProductByCategoryId,
};
