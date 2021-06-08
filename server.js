const express = require("express");
//const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
var path = require("path");
const dbService = require("./database/dbService");
var dot = require("dotenv");
dot.config();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);
dbService.conn();

//console.log(process.env);
console.log(process.env.USERNAME);
let port = process.env.PORT || 9000;
app.listen(port, () => console.log("My server is listening on port 4000."));
