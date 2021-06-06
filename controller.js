const { merge } = require("./routes");
const moment = require("moment");
const dbService = require("./database/dbService");

exports.getRoot = async (req, res) => {
  res.send("Welcome to James Wu api portal");
};

exports.getPublic = async (req, res) => {
  const company = {
    name: "StudentPainting",
    contact: "438-929-0303",
  };
  res.status(200).json(company);
};

exports.getEmployees = async (req, res) => {
  try {
    let rows = await dbService.query("employee");
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err.message);
    res.status(200).json({ message: "GET employees failed" });
  }
};

exports.postRoot = async (req, res) => {
  res.send('it is a POST method, path is "/"');
};

exports.postPublic = async (req, res) => {
  res.send('it is a POST method, path is "/public"');
};

exports.putRoot = async (req, res) => {
  res.send('it is a PUT method, path is "/"');
};

exports.putPublic = async (req, res) => {
  res.send('it is a PUT method, path is "/public"');
};

exports.deleteRoot = async (req, res) => {
  res.send('it is a DELETE method, path is "/"');
};

exports.deletePublic = async (req, res) => {
  res.send('it is a DELETE method, path is "/public"');
};
