const Sequelize = require("sequelize");
const { sequelize } = require("../Database/dbConfig");

const Detail = sequelize.define("Detail", {
  title: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
  },
});

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
