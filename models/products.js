import { Sequelize } from "sequelize";
import Joi from "joi";
import { connection } from "../config/connection.js";
const products = connection.define("products", {
  productId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qtyPerUnit: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitInStock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  discontinued: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
});

//Joi schema for input validation
const Schema = Joi.object({
  productName: Joi.string().required(),
  qtyPerUnit: Joi.number().integer().required(),
  unitPrice: Joi.number().integer().required(),
  unitInStock: Joi.number().integer().required(),
  discontinued: Joi.boolean(),
  categoryId:Joi.number()
});

export { products ,Schema };
