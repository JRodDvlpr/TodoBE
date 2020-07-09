// Update with your config settings.

const pgConnection = process.env.DATABASE_URL || 'postgres://gydvubwtrrbnjv:220101aa8c705ecd2aee73a373fe8b0087c74e5f988644efbc6e55927e468ef9@ec2-18-214-119-135.compute-1.amazonaws.com:5432/d96k4e827d9ekq'

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/users.db3'
    },
    useNullAsDefault: true,
     migrations: {
       directory: './database/migrations'
     },
     seeds: {
       directory: './database/seeds'
     },
     pool: {
       afterCreate: (conn, done) => {
         conn.run("PRAGMA foreign_keys = ON", done)
       }
     }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
