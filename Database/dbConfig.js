const Sequelize = require("sequelize");
const path = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:3306/${process.env.DATABASE_NAME}`;
const sequelize = new Sequelize(path);
// const databaseConnect = () => {
//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log(config.get("dbconnectMsg"));
//     })
//     .catch((err) => {
//       console.error(config.get("dbConnectError"), err);
//     });
// };

// const databaseConfig = {};

// databaseConfig.Sequelize = Sequelize;
// databaseConfig.sequelize = sequelize;

module.exports = {
  // databaseConnect: databaseConnect,
  // databaseConfig: databaseConfig,
  sequelize,
};
