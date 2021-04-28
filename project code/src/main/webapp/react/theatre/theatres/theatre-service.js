const THEATRE_URL = "http://localhost:8080/api/theatre"

export const createTheatre = (theatre) =>
    fetch(THEATRE_URL, {
        method: 'POST',
        body: JSON.stringify(theatre),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAllTheatres = () =>
    fetch(THEATRE_URL)
        .then(response => response.json())

export const findTheatreById = (id) =>
    fetch(`${THEATRE_URL}/${id}`)
        .then(response => response.json())

export const updateTheatre = (id, theatre) =>
    fetch(`${THEATRE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(theatre),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const deleteTheatre = (id) =>
    fetch(`${THEATRE_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createTheatre,
    findAllTheatres,
    findTheatreById,
    updateTheatre,
    deleteTheatre
}