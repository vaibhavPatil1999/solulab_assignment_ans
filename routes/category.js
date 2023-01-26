import { Router } from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  fetchCategory,
} from "../controllers/category.js";
const router = Router();

/**
 * name:read
 * method:POST
 * route - http://localhost:3000/category/read
 */
router.get("/read", fetchCategory);

/**
 * name:create
 * method:POST
 * route - http://localhost:3000/category/create
 */
router.post("/create", createCategory);

/**
 * name:updateCategory
 * method:PUT
 * route - http://localhost:3000/category/updateCategory/1
 * description:this end point update category by categoryId you provide in params
 */
router.put("/updateCategory/:id", updateCategory);

/**
 * name:deleteCategory
 * method:PUT
 * route - http://localhost:3000/category/deleteCategory/1
 * description:this end point delete category by categoryId you provide in params
 */
router.delete("/deleteCategory/:id", deleteCategory);

export { router };
