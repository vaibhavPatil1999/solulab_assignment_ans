import { Router } from "express";
import {
  createProducts,
  fetchAllProducts,
  fetchProductById,
  fetchProductByCategory,
  updateProductByProductId,
  updateProductByCategoryId,
  deleteProductByProductId,
  deleteProductByCategoryId,
} from "../controllers/product.js";
const router = Router();

/**
 * name:create
 * method:POST
 * route - http://localhost:3000/products/create
 */
router.post("/create", createProducts);

/**
 * name:realALL
 * method:GET
 * route - http://localhost:3000/products/readAll
 * description:this end point fetch all the products
 */
router.get("/readAll", fetchAllProducts);

/**
 * name:read
 * method:GET
 * route - http://localhost:3000/products/read/1
 * description:this end point fetch products by product id you provide
 */
router.get("/read/:productId", fetchProductById);

/**
 * name:readByCategory
 * method:GET
 * route - http://localhost:3000/products/readByCategory/1
 * description:this end point fetch products by category id you provide
 */
router.get("/readByCategory/:categoryId", fetchProductByCategory);

/**
 * name:UPDATE
 * method:PUT
 * route - http://localhost:3000/products/update/1
 * description:this end point update products of productId you provide in params
 */
router.put("/update/:productId", updateProductByProductId);

/**
 * name:updateByCategory
 * method:PUT
 * route - http://localhost:3000/products/updateByCategory/1
 * description:this end point update all products of categoryId you provide in params
 */
router.put("/updateByCategory/:categoryId", updateProductByCategoryId);

/**
 * name:delete
 * method:DELETE
 * route - http://localhost:3000/products/delete/1
 * description:this end point delete single product by productId you provide in params
 */
router.delete("/delete/:productId", deleteProductByProductId);

/**
 * name:deleteByCategory
 * method:DELETE
 * route - http://localhost:3000/products/deleteByCategory/1
 * description:this end point delete all product related to catetgoryId you provide in params
 */
router.delete("/deleteByCategory/:categoryId", deleteProductByCategoryId);

export { router };
