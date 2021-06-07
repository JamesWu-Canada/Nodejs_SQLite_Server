const { merge } = require("./routes");
const moment = require("moment");
const dbService = require("./database/dbService");
const { resolve } = require("path");

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

exports.getDepartments = async (req, res) => {
  try {
    let rows = await dbService.query("department");
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err.message);
    res.status(200).json({ message: "GET departments failed" });
  }
};

exports.postRoot = async (req, res) => {
  res.send('it is a POST method, path is "/"');
};

exports.postPublic = async (req, res) => {
  res.send('it is a POST method, path is "/public"');
};

exports.postEmployee = async (req, res) => {
  try {
    let result = await dbService.insert_row(
      "employee",
      Object.keys(req.body),
      Object.values(req.body)
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};

exports.postDepartment = async (req, res) => {
  try {
    let result = await dbService.insert_row(
      "department",
      Object.keys(req.body),
      Object.values(req.body)
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};

exports.putRoot = async (req, res) => {
  res.send('it is a PUT method, path is "/"');
};

exports.putPublic = async (req, res) => {
  res.send('it is a PUT method, path is "/public"');
};

exports.putEmployee = async (req, res) => {
  try {
    let result = await dbService.update_row(
      "employee",
      Object.keys(req.body),
      Object.values(req.body),
      "ssn",
      req.body.ssn
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};

exports.putDepartment = async (req, res) => {
  try {
    let result = await dbService.update_row(
      "department",
      Object.keys(req.body),
      Object.values(req.body),
      "dnumber",
      req.body.dnumber
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};

exports.deleteRoot = async (req, res) => {
  res.send('it is a DELETE method, path is "/"');
};

exports.deletePublic = async (req, res) => {
  res.send('it is a DELETE method, path is "/public"');
};

exports.deleteEmployee = async (req, res) => {
  try {
    let result = await dbService.delete_row("employee", "ssn", req.body.ssn);
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};

exports.deleteDepartment = async (req, res) => {
  console.log("controller:deleteDepartment");
  try {
    let result = await dbService.delete_row(
      "department",
      "dnumber",
      req.body.dnumber
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(200).json(err.message);
  }
};
