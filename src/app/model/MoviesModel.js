const Model = require("./Model");

class MoviesModel extends Model{
    list(){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies`);
    }

    get(id){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies WHERE id=?`, [id]);
    }

    search(term){
        return this.conn.query(`SELECT title, director, release_year, genre, rating
            FROM movies WHERE title LIKE '%${term}%'
            OR director LIKE '%${term}%' `);
    }
}

module.exports = MoviesModel;