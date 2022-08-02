const { getAllWords } = require("./word.service");

module.exports = {
  getAllWords: (req, res) => {
    getAllWords((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
