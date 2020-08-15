const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    res.render("index", { burgers: data });
  });
});

module.exports = router;