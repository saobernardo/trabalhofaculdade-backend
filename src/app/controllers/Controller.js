const db = require("../../config/database");

class Controller {
  async connectionDB() {
    return db();
  }
}

module.exports = Controller;
