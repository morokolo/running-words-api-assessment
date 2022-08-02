const pool = require("../../config/database");

module.exports = {
  createASentence: (data, callBack) => {
    pool.query(
      `insert into sentences(sentence)
                values(?)`,
      [data.sentence],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getAllSentences: (callBack) => {
    pool.query(`select * from sentences`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
