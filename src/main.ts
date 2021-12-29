import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
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
  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.use(json({ limit: '5mb' }));
  app.use(urlencoded({ extended: true, limit: '5mb' }));
  await app.listen(5050);
}
bootstrap();
