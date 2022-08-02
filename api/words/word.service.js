const pool = require("../../config/database");

module.exports = {
  getAllWords: (callBack) => {
    pool.query(`select * from words`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
