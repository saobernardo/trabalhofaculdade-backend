const db = require("../../config/database");

class Controller {
  //Método irá chamar a conexão com o BD
  async connectionDB() {
    return db();
  }
}

module.exports = Controller;
