const { getAllWords } = require("./word.controller");
const router = require("express").Router();

router.get("/", getAllWords);

module.exports = router;
