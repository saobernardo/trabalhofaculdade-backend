const Controller = require("./Controller");
const MoviesModel = require("../model/MoviesModel");

class FilmeController extends Controller{
    async list(req, res){
        const conn_customer = await super.connectionDB();
        const moviesModel = new MoviesModel(conn_customer);

        let movies = await moviesModel.list();

        await conn_customer.destroy();

        return res.json(movies[0]);
    }

    async get(req, res){
        const conn_customer = await super.connectionDB();
        const moviesModel = new MoviesModel(conn_customer);

        let id = req.params.id;
        let movie = await moviesModel.get(id);

        await conn_customer.destroy();

        return res.json(movie[0]);
    }

    async search(req,res){
        const conn_customer = await super.connectionDB();
        const moviesModel = new MoviesModel(conn_customer);

        let term = req.query.term;

        let movie = await moviesModel.search(term);

        await conn_customer.destroy();

        return res.json(movie[0]);
    }
}

module.exports = new FilmeController;