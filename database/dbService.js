const sqlite3 = require("sqlite3").verbose();
const path = require("path");

var database = null;
exports.conn = () => {
  let dbPath = path.join(__dirname, "data.db");
  console.log(`dbPath  = *** ${dbPath}`);
  //console.log(`__dirname == *** ${__dirname}`);
  database = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Connected to a SQLITE database.");
  });
};

exports.close_db = () => {
  if (database === null) return;
  database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
};

exports.create_table = (table_name, ...Args) => {
  if (!database) return;
  database.run("CREATE TABLE IF NOT EXISTS " + table_name + "(" + Args + ")");
};

exports.insert_row = async (table_name, [...cols], [...vals]) => {
  console.log("db: insert_row");
  if (!database || !table_name) return "Invalid table/database";

  return new Promise((resolve, reject) => {
    let placeholders = vals.map((v) => "?").join(",");
    let sql =
      "INSERT INTO " +
      table_name +
      "(" +
      cols.toString() +
      ") VALUES " +
      "(" +
      placeholders +
      ")";
    console.log(`sql = *** ${sql}`);
    database.run(sql, vals, (err) => {
      if (err) {
        console.error(`err: ${err.message}`);
        reject(err.message);
      }
      resolve({ message: "posting successful" });
    });
  });
};

exports.update_row = async (
  table_name,
  [...cols],
  [...vals],
  key,
  keyValue
) => {
  console.log("db: update_row");
  if (!database || !table_name) return "Invalid table/database";

  return new Promise((resolve, reject) => {
    let placeholders = cols.map((c) => c + "=?").join(",");
    let sql =
      "UPDATE " + table_name + " SET " + placeholders + " WHERE " + key + "= ?";

    console.log(vals);
    vals.push(keyValue);
    console.log(`sql = *** ${sql}`);
    console.log(vals);
    database.run(sql, vals, (err) => {
      if (err) {
        console.error(`err: ${err.message}`);
        reject(err.message);
      }
      resolve({ message: "updated successfully" });
    });
  });
};

exports.update_row2 = (
  table_name,
  [...cols],
  [...vals],
  key,
  keyValue,
  getResult
) => {
  console.log("db: update_row2");
  if (!database || !table_name) return "Invalid table/database";

  let placeholders = cols.map((c) => c + "=?").join(",");
  let sql =
    "UPDATE " + table_name + " SET " + placeholders + " WHERE " + key + "= ?";

  console.log(vals);
  vals.push(keyValue);
  console.log(`sql = *** ${sql}`);
  console.log(vals);
  database.run(sql, vals, (err) => {
    if (err) {
      console.error(`err: ${err.message}`);
      getResult({ err: err.message });
      return;
    }
    console.log();
    getResult({ message: "updated successfully" });
  });
};

exports.delete_row = async (table_name, key, keyValue) => {
  console.log("dbService: delete_row");
  if (!database || !table_name) return "Invalid table/database";

  return new Promise((resolve, reject) => {
    let sql = "DELETE FROM " + table_name + " WHERE " + key + "= ?";
    console.log(sql);
    database.run(sql, keyValue, (err) => {
      if (err) {
        console.error(`err: ${err.message}`);
        reject(err.message);
      }
      console.log("good result");
      resolve({ message: "deleted successfully" });
    });
  });
};

exports.query = async (table_name = "") => {
  console.log("at query_rows");
  if (table_name === "") {
    return [];
  }

  return new Promise((resolve, reject) => {
    if (!database) reject(new Error("null database"));
    let sql = `SELECT * from ${table_name}`;
    console.log(`sql = ${sql}`);
    database.all(sql, [], (err, rows) => {
      if (err) {
        console.log(err.message);
        reject(err.message);
      }
      resolve(rows);
    });
  });
};
