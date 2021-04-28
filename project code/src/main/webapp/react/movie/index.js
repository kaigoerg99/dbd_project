import MovieList from "./movies/movie-list";
import TheatreList from "../theatre/theatres/theatre-list";
import MovieEditor from "./movies/movie-editor";
import TheatreEditor from "../theatre/theatre-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/movies", "/"]} exact={true}>
                    <MovieList/>
                </Route>
                <Route path="/movies/:id" exact={true}>
                    <MovieEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
