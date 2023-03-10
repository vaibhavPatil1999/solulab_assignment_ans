import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const connection = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);
export { connection };
