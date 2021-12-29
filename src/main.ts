import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
const cors = require('cors');

require('dotenv').config();
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'db.giabgigmxhfkekaahkly.supabase.co',
    user: 'postgres',
    password: 'h76G1KK@4Ls%rW',
    database: 'postgres',
    port: 3306,
  },
  migrations: {
    tableName: 'migrations',
  },
});

async function bootstrap() {
  console.log(process.env.SERVICE_KEY);
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  );
  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  console.log('DATABASE_URL: ', process.env.DATABASE_URL);
  app.use(json({ limit: '5mb' }));
  app.use(urlencoded({ extended: true, limit: '5mb' }));
  await app.listen(process.env.PORT || 5050);
}
bootstrap();
