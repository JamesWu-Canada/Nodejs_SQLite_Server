const express = require("express");
const router = express.Router();

const {
  getRoot,
  getPublic,
  postRoot,
  postPublic,
  putRoot,
  putPublic,
  deleteRoot,
  deletePublic,
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
router.get("/public", getPublic);
router.get("/employees", getEmployees);
router.get("/departments", getDepartments);
router.post("/", postRoot);
router.post("/public", postPublic);
router.post("/employee", postEmployee);
router.post("/department", postDepartment);
router.put("/", putRoot);
router.put("/public", putPublic);
router.put("/employee", putEmployee);
router.put("/department", putDepartment);
router.delete("/", deleteRoot);
router.delete("/public", deletePublic);
router.delete("/employee", deleteEmployee);
router.delete("/department", deleteDepartment);

module.exports = router;
