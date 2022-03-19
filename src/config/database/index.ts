import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config();

interface IConnection {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const {
  DB_HOST_DEVELOPMENT,
  DB_PORT_DEVELOPMENT,
  DB_USER_DEVELOPMENT,
  DB_PASSWORD_DEVELOPMENT,
  DB_NAME_DEVELOPMENT,
  DB_HOST_TEST,
  DB_PORT_TEST,
  DB_USER_TEST,
  DB_PASSWORD_TEST,
  DB_NAME_TEST,
  NODE_ENV,
} = process.env;

const databaseConfig: Record<string, IConnection> = {
  development: {
    dialect: 'mysql',
    host: DB_HOST_DEVELOPMENT,
    port: Number(DB_PORT_DEVELOPMENT) || 3306,
    username: DB_USER_DEVELOPMENT,
    password: DB_PASSWORD_DEVELOPMENT,
    database: DB_NAME_DEVELOPMENT,
  },
  test: {
    dialect: 'mysql',
    host: DB_HOST_TEST,
    port: Number(DB_PORT_TEST) || 3306,
    username: DB_USER_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_NAME_TEST,
  },
};

export const getDatabaseConfig = () => databaseConfig[NODE_ENV];
