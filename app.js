require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const wordRouter = require("./api/words/word.router");
const sentenceRouter = require("./api/sentences/sentence.router");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/words", wordRouter);
app.use("/api/sentences", sentenceRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT: ", process.env.APP_PORT);
});
