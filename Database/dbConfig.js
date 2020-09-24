const Sequelize = require("sequelize");
const config = require("config");
const path = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:3306/${process.env.DATABASE_NAME}`;

const databaseConnect = () => {
  const sequelize = new Sequelize(path);

  sequelize
    .authenticate()
    .then(() => {
      console.log(config.get("dbconnectMsg"));
    })
    .catch((err) => {
      console.error(config.get("dbConnectError"), err);
    })
    .finally(() => {
      sequelize.close();
    });
};

module.exports = {
  databaseConnect: databaseConnect,
};
