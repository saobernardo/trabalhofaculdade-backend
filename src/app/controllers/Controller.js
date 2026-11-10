const db = require("../../config/database");

class Controller {
  //Método irá chamar a conexão com o BD
  async connectionDB(banco) {
    return db(banco);
  }
}

module.exports = Controller;
