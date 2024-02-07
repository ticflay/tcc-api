import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';
import { AnswerForm } from '../models/answer';
import { Category } from '../models/category';
import { Criteria } from '../models/criteria';
import { FormUser } from '../models/formUser';
import { Question } from '../models/question';


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const connection: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
    logging: console.log,
    models: [User, AnswerForm, Category, Criteria, FormUser, Question],
})

export default connection;