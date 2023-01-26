import { Sequelize } from "sequelize";
import Joi from "joi";
import { connection } from "../config/connection.js";
const category = connection.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Schema = Joi.object({
  categoryName: Joi.string().required(),
});

export { category, Schema };
