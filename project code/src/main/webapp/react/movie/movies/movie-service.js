const MOVIE_URL = "http://localhost:8080/api/movies"

export const createMovie = (movie) =>
    fetch(MOVIE_URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAllMovies = () =>
    fetch(MOVIE_URL)
        .then(response => response.json())

export const findMovieById = (id) =>
    fetch(`${MOVIE_URL}/${id}`)
        .then(response => response.json())

export const updateMovie = (id, movie) =>
    fetch(`${MOVIE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const deleteMovie = (id) =>
    fetch(`${MOVIE_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createMovie,
    findAllMovies,
    findMovieById,
    updateMovie,
    deleteMovie
}