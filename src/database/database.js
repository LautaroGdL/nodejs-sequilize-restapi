import { Sequelize } from "sequelize";

const database = process.env.username
const username = process.env.username
const password = process.env.username

const sequelize = new Sequelize(
database, 
username, 
password,
{
    host: 'localhost',
    dialect: 'postgres',
}
);