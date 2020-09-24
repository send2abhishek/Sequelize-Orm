const root = (req, res) => {
  res.status(200).json({
    msg: "get route1 get request",
  });
};

module.exports = {
  root,
};
