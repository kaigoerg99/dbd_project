import movieService from "./movie-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const MOVIE_URL = "http://localhost:8080/api/movies"

const MovieEditorForm = () => {
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findMovieById(id)
    }, []);
    const findMovieById = (id) =>
        movieService.findMovieById(id)
            .then(movie => setMovie(movie))
    const updateMovie = (id, newMovie) =>
        movieService.updateMovie(id, newMovie)
            .then(() => history.goBack())
    const deleteMovie = (id) =>
        movieService.deleteMovie(id)
            .then(() => history.goBack())

    return (
        <div>
            <h2>
                Movie Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={movie.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setMovie(movie => ({...movie, title: e.target.value}))}
                value={movie.title}/>
                <label>Date of Release</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setMovie(movie => ({...movie, dateOfRelease: Date.parse(e.target.value)}))}
                value={movie.dateOfRelease}/>
                <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={movie.genre}
                onChange={(e)=>setMovie(movie => ({...movie, genre: e.target.value}))}>
                <option>HORROR</option>
                <option>COMEDY</option>
                <option>SCI-FI</option>
                <option>FANTASY</option>
                <option>ACTION</option>
            </select>
            <button
                onClick={() => updateMovie(movie.id, movie)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteMovie(movie.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default MovieEditorForm