const USER_URL = "http://localhost:8080/api/movieUsers"

export const createUser = (user) =>
    fetch(USER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAllUsers = () =>
    fetch(USER_URL)
        .then(response => response.json())

export const findUserById = (id) =>
    fetch(`${USER_URL}/${id}`)
        .then(response => response.json())

export const updateUser = (id, user) =>
    fetch(`${USER_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const deleteUser = (id) =>
    fetch(`${USER_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}