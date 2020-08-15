const orm = require("../config/orm.js");

const burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (res) => {
      callback(res);
    })
  },
  insertOne: (burgerName, callback) => {
    orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, (res) => {
      callback(res);
    })
  },
  updateOne: (selectedId, callback) => {
    orm.updateOne("burgers", "devoured", true, "id", selectedId, (res) => {
      callback(res);
    })
  }
};

module.exports = burger;