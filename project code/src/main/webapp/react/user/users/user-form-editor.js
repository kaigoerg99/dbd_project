import userService from "./user-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const USER_URL = "http://localhost:8080/api/movieUsers"

const UserEditorForm = () => {
        const [user, setUser] = useState({})
        const {id} = useParams()
        const history = useHistory()
        useEffect(() => {
                findUserById(id)
        }, []);
        const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))
        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser)
                .then(() => history.goBack())
        const deleteUser = (id) =>
            userService.deleteUser(id)
                .then(() => history.goBack())

        return (
            <div>
                    <h2>
                            User Editor
                    </h2>
                    <label>Id</label>
                    <input
                        className="form-control margin-bottom-10px"
                        readOnly={true}
                        value={user.id}/>
                    <label>First Name</label>
                    <input
                        className="form-control margin-bottom-10px"
                        onChange={(e) => setUser(user => ({...user, firstName: e.target.value}))}
                        value={user.name}/>
                    <label>Last Name</label>
                    <input
                        className="form-control margin-bottom-10px"
                        onChange={(e) => setUser(user => ({...user, lastName: e.target.value}))}
                        value={user.lastName}/>
                <label>Username</label>
                <input
                    className="form-control margin-bottom-10px"
                    onChange={(e) => setUser(user => ({...user, username: e.target.value}))}
                    value={user.username}/>
                <label>Password</label>
                <input
                    className="form-control margin-bottom-10px"
                    onChange={(e) => setUser(user => ({...user, password: e.target.value}))}
                    value={user.password}/>
                <label>Email</label>
                <input
                    className="form-control margin-bottom-10px"
                    onChange={(e) => setUser(user => ({...user, email: e.target.value}))}
                    value={user.email}/>
                <label>Date of Birth</label>
                <input
                    className="form-control margin-bottom-10px"
                    onChange={(e) => setUser(user => ({...user, dateOfBirth: e.target.value}))}
                    value={user.dateOfBirth}/>
                    <button
                        onClick={() => updateUser(user.id, user)}
                        className="btn btn-success btn-block">Save</button>
                    <button
                        onClick={() => {
                                history.goBack()
                        }}
                        className="btn btn-danger btn-block margin-left-10px">Cancel</button>
                    <button
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger btn-block margin-left-10px">Delete</button>
            </div>
        )
}

export default UserEditorForm