import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import knex, { Knex } from 'knex';
import connectionDetails from 'knexfile';

@Injectable()
export class DbConnectionService {
  knex: Knex;

  constructor() {
    let connectionDetailsForEnv =
      connectionDetails[process.env.NODE_ENV || 'development'];
    console.log('DB conn: ', connectionDetailsForEnv);
    this.knex = knex(connectionDetailsForEnv);
  }
}
