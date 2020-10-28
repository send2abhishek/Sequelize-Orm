const model = require("../Database/dbConfig");

const { sequelize, Sequelize } = model.databaseConfig;
const Detail = () => {
  sequelize.define("Detail", {
    title: {
      type: Sequelize.STRING,
    },

    description: {
      type: Sequelize.STRING,
    },
  });

  return sequelize.models.Detail;
};
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  Detail,
};
