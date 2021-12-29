// Update with your config settings.

const connectionDetails = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'db.giabgigmxhfkekaahkly.supabase.co',
      user: 'postgres',
      password: 'h76G1KK@4Ls%rW',
      database: 'postgres',
      charset: 'utf8',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export default connectionDetails;
