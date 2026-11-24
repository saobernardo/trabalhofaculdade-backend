const Controller = require("./Controller");
const MoviesModel = require("../model/MoviesModel");

/**
 * Controller responsible for handling HTTP requests related to movies.
 *
 * @extends Controller
 */
class FilmeController extends Controller{
    /**
   * Retrieves a list of movies and sends the result as JSON.
   *
   * @async
   * @param {import('express').Request} req - Express request object.
   * @param {import('express').Response} res - Express response object.
   * @returns {Promise<import('express').Response>} JSON response containing the movie list data.
   */
    async list(req, res){
        const conn_customer = await super.connectionDB();
        const moviesModel = new MoviesModel(conn_customer);

        let movies = await moviesModel.list();

        await conn_customer.destroy();

        return res.json(movies[0]);
    }

    /**
   * Retrieves a single movie by ID from route parameters and sends it as JSON.
   *
   * @async
   * @param {import('express').Request} req - Express request object containing `params.id`.
   * @param {import('express').Response} res - Express response object.
   * @returns {Promise<import('express').Response>} JSON response containing the matching movie data.
   */
    async get(req, res){
        const conn_customer = await super.connectionDB();
        const moviesModel = new MoviesModel(conn_customer);

        let id = req.params.id;
        let movie = await moviesModel.get(id);

        await conn_customer.destroy();

        return res.json(movie[0]);
    }

    /**
   * Searches for movies matching a query term and sends the result as JSON.
   *
   * @async
   * @param {import('express').Request} req - Express request object containing `query.term`.
   * @param {import('express').Response} res - Express response object.
   * @returns {Promise<import('express').Response>} JSON response containing the search result data.
   */
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