import UserEditorInline from "./user-editor-inline";
import userService, {findAllUsers} from "./user-service"

const USER_URL = "http://localhost:8080/api/movieUsers"
const { useState, useEffect } = React;

const UserList = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({})
    useEffect(() => {
        findAllUsers()
    }, [])
    const createUser = (user) =>
        userService.createUser(user)
            .then(user => {
                setNewUser({title:''})
                setUsers(users => ([...users, user]))
            })
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(user => setUsers(users => (users.map(user => user.id === id ? newUser : user))))
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(users => setUsers(users => users.filter(user => user.id !== id)))
    return(
        <div>
            <h2>User List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Please enter a title for the new user"
                                   title="Please enter a title for the user" className="form-control" value={newUser.title}
                                   onChange={(e) => setNewUser(newUser => ({...newUser, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createUser(newUser)}></i>
                        </div>
                    </div>
                </li>
                {
                    users.map(user =>
                        <li key={user.id} className="list-group-item">
                            <UserEditorInline key={user.id}
                                               updateUser={updateUser}
                                               deleteUser={deleteUser}
                                               user={user}/>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;