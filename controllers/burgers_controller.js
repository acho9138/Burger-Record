const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    res.render("index", { burgers: data });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;