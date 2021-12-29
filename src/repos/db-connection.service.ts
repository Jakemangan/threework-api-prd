import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import connectionDetails from '../../knexfile';
import knex, { Knex } from 'knex';

@Injectable()
export class DbConnectionService {
  knex: Knex;

  constructor() {
    let connectionDetailsForEnv =
      connectionDetails[process.env.NODE_ENV || 'development'];
    this.knex = knex(connectionDetailsForEnv);
  }
}
