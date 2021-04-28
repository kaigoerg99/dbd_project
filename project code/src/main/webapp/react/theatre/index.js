import TheatreList from "./theatres/theatre-list";
import TheatreEditor from "./theatres/theatre-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/theatres", "/"]} exact={true}>
                    <TheatreList/>
                </Route>
                <Route path="/theatres/:id" exact={true}>
                    <TheatreEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
