const express = require("express");
const router = express.Router();

const {
  getGithubUser,
} = require("../controllers/github.controller");

router.get("/:username", getGithubUser);

module.exports = router;