const { getAllSentences, createASentence } = require("./sentence.service");

module.exports = {
  createASentence: (req, res) => {
    const body = req.body;
    createASentence(body, (err, results) => {
      if (err) {
        console.log(err);
      }

      return res.status(200).json({
        success: 200,
        data: results,
      });
    });
  },
  getAllSentences: (req, res) => {
    getAllSentences((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 200,
        data: results,
      });
    });
  },
};
