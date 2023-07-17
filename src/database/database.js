import Sequelize  from "sequelize";
import dotenv from "dotenv";
dotenv.config()

const database = process.env.database
const username = process.env.username
const password = process.env.password

console.log(password);

export const sequelize = new Sequelize(
database, 
username, 
password,
{
    host: 'localhost',
    dialect: 'postgres',
}
);