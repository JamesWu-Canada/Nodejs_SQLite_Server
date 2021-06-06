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
} = require("./controller");

router.get("/", getRoot);
router.get("/public", getPublic);
router.get("/employees", getEmployees);
router.post("/", postRoot);
router.post("/public", postPublic);
router.put("/", putRoot);
router.put("/public", putPublic);
router.delete("/", deleteRoot);
router.delete("/public", deletePublic);

module.exports = router;
