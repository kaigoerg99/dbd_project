import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/movieUsers", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/movieUsers/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
