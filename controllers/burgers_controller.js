const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burger_name, (data) => {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    // If no rows were changed, then the ID must not exist, so 404
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;