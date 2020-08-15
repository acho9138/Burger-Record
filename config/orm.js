const connection = require("./connection.js");

const orm = {
  selectAll: (tableName, callback) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: (tableName, col1, col2, val1, val2, callback) => {
    const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    connection.query(queryString, [tableName, col1, col2, val1, val2], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: (tableName, col1, val1, col2, val2, callback) => {
    const queryString =
      "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableName, col1, val1, col2, val2], (err, result) => {
      if (err) throw err;
      callback(result);
    }
    );
  }
};

module.exports = orm;