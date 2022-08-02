const { getAllSentences, createASentence } = require("./sentence.controller");

const router = require("express").Router();

router.post("/", createASentence);
router.get("/list", getAllSentences);

module.exports = router;
