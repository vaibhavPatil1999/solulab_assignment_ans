import { category } from "../models/category.js";
import { products } from "../models/products.js";

const fetchProduct = async (id) => {
  const product = await products.findAll({
    where: { productId: id },
    include: {
      model: category,
    },
  });
  if (product.length <= 0) {
    return null;
  } else if (product[0].category === null) {
    return product;
  } else {
    return { product, category: product[0].category.categoryName };
  }
};

const fetchByCategory = async (id) => {
  const product = await products.findAll({
    where: { categoryId: id },
    include: {
      model: category,
    },
  });
  return product;
};
const fetchAll = async () => {
  const product = await products.findAll({
    include: {
      model: category,
    },
  });
  return product;
};
export { fetchProduct, fetchByCategory, fetchAll };
