import path from 'path';

export default {
  database: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: path.join(__dirname, './entities/index.{ts,js}'),
    migrations: path.join(__dirname, './migrations/*.{ts,js}'),
  },
};
