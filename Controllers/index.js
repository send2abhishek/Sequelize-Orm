const { Detail } = require("../Models/");

const saveData = (req, res) => {
  const tutorial = {
    title: "Abhishek Aryan",
    description: "Desc",
  };

  Detail.create(tutorial)
    .then((data) => {
      res.status(201).json({
        msg: "data saved",
        data,
      });
    })
    .catch((err) => {
      console.log("Something went wrong ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

const getData = (req, res) => {
  Detail.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Something went wrong ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

module.exports = {
  saveData,
  getData,
};
