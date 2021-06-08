const express = require("express");
const router = express.Router();

const {
  getRoot,
  getEmployees,
  postEmployee,
  putEmployee,
  deleteEmployee,
  getDepartments,
  postDepartment,
  putDepartment,
  deleteDepartment,
} = require("./controller");

router.get("/", getRoot);
router.get("/employees", getEmployees);
router.get("/departments", getDepartments);
router.post("/employee", postEmployee);
router.post("/department", postDepartment);
router.put("/employee", putEmployee);
router.put("/department", putDepartment);
router.delete("/employee", deleteEmployee);
router.delete("/department", deleteDepartment);

module.exports = router;
