const Controller = require("./Controller");

class FilmeController extends Controller{
    async list(req, res){
        return res.status(200).json([1]);
    }

    async get(req, res){
        return res.status(200).json([2]);
    }

    async search(req,res){
        return res.status(200).json([3]);
    }
}

module.exports = new FilmeController;