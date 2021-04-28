import MovieEditorInline from "./movie-editor-inline";
import movieService, {findAllMovies} from "./movie-service"

const MOVIE_URL = "http://localhost:8080/api/movies"
const { useState, useEffect } = React;

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [newMovie, setNewMovie] = useState({})
    useEffect(() => {
        findAllMovies()
    }, [])
    const createMovie = (movie) =>
        movieService.createMovie(movie)
            .then(movie => {
                setNewMovie({title:''})
                setMovies(movies => ([...movies, movie]))
            })
    const updateMovie = (id, newMovie) =>
        movieService.updateMovie(id, newMovie)
            .then(movie => setMovies(movies => (movies.map(movie => movie.id === id ? newMovie : movie))))
    const findAllMovies = () =>
        movieService.findAllMovies()
            .then(movies => setMovies(movies))
    const deleteMovie = (id) =>
        movieService.deleteMovie(id)
            .then(movies => setMovies(movies => movies.filter(movie => movie.id !== id)))
    return(
        <div>
            <h2>Movie List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Please enter a title for the new movie"
                                   title="Please enter a title for the movie" className="form-control" value={newMovie.title}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createMovie(newMovie)}></i>
                        </div>
                    </div>
                </li>
                {
                    movies.map(movie =>
                        <li key={movie.id} className="list-group-item">
                            <MovieEditorInline key={movie.id}
                                                updateMovie={updateMovie}
                                                deleteMovie={deleteMovie}
                                                movie={movie}/>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default MovieList;