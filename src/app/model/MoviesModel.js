const Model = require("./Model");

/**
 * @typedef {Object} MovieRecord
 * @property {string} title - Movie title.
 * @property {string} director - Movie director.
 * @property {number} release_year - Year the movie was released.
 * @property {string} genre - Movie genre.
 * @property {number} rating - Movie rating.
 */

/**
 * Model responsible for querying movie records from the database.
 *
 * @extends Model
 */
class MoviesModel extends Model{
    /**
   * Retrieves all movies from the database.
   *
   * @returns {Promise<Array>} Query result set containing movie rows.
   */
    list(){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies`);
    }

    /**
   * Retrieves a single movie by its ID using a parameterized query.
   *
   * @param {number|string} id - Unique identifier of the movie.
   * @returns {Promise<Array>} Query result set for the matching movie ID.
   */
    get(id){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies WHERE id=?`, [id]);
    }

    /**
   * Searches movies by matching a term against the title or director.
   *
   * @param {string} term - Search keyword or partial match string.
   * @returns {Promise<Array>} Query result set containing matching movies.
   */
    search(term){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies WHERE title LIKE '%${term}%'
            OR director LIKE '%${term}%' `);
    }
}

module.exports = MoviesModel;