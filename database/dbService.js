const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let database = null;
conn_db = () => {
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

close_db = () => {
  if (database === null) return;
  database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
};

create_table = (table_name, ...Args) => {
  if (!database) return;
  database.run("CREATE TABLE IF NOT EXISTS " + table_name + "(" + Args + ")");
};

insert_row = async (table_name = "", [values]) => {
  return new Promise((resolve, reject) => {
    if (!database) reject(new Error("null database"));
    let sql = `INSERT into ${table_name}`;
    console.log(`sql = ${sql}`);
    database.run(sql, [values], (err) => {
      if (err) {
        console.log(err.message);
        reject(err);
      }
      resolve({ message: "data inserted" });
    });
  });
};

query_rows = async (table_name = "") => {
  console.log("at query_rows");
  return new Promise((resolve, reject) => {
    if (!database) reject(new Error("null database"));
    let sql = `SELECT * from ${table_name}`;
    console.log(`sql = ${sql}`);
    database.all(sql, [], (err, rows) => {
      if (err) {
        console.log(err.message);
        reject(err);
      }
      return resolve(rows);
    });
  });
};

module.exports.conn = conn_db;
module.exports.close = close_db;
module.exports.create = create_table;
module.exports.insert = insert_row;
module.exports.query = query_rows;
