const { merge } = require("./routes");
const moment = require("moment");
const dbService = require("./database/dbService");
const { resolve } = require("path");

exports.getRoot = async (req, res) => {
  res.send("Welcome to James Wu api portal");
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

exports.putDepartment2 = (req, res) => {
  console.log("controller: putDepartment2");
  function getResult(result) {
    console.log(result);
    res.status(200).json(result);
  }

  let result = dbService.update_row2(
    "department",
    Object.keys(req.body),
    Object.values(req.body),
    "dnumber",
    req.body.dnumber,
    getResult
  );
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
