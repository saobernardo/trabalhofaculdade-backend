CREATE DATABASE movies;

USE movies; 

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    release_year INT,
    genre VARCHAR(100),
    rating DECIMAL(3, 1)
);

INSERT INTO movies (title, director, release_year, genre, rating) VALUES 
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama', 9.3),
('The Godfather', 'Francis Ford Coppola', 1972, 'Crime', 9.2),
('The Dark Knight', 'Christopher Nolan', 2008, 'Action', 9.0),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime', 8.9),
('Inception', 'Christopher Nolan', 2010, 'Sci-Fi', 8.8);