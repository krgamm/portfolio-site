module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5442),
        database: env("DATABASE_NAME", "portfolio"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Kg08281996"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
