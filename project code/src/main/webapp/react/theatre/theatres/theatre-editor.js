import theatreService from "./theatre-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const THEATRE_URL = "http://localhost:8080/api/theatres"

const TheatreEditorForm = () => {
    const [theatre, setTheatre] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findTheatreById(id)
    }, []);
    const findTheatreById = (id) =>
        theatreService.findTheatreById(id)
            .then(theatre => setTheatre(theatre))
    const updateTheatre = (id, newTheatre) =>
        theatreService.updateTheatre(id, newTheatre)
            .then(() => history.goBack())
    const deleteTheatre = (id) =>
        theatreService.deleteTheatre(id)
            .then(() => history.goBack())

    return (
        <div>
            <h2>
                Theatre Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={theatre.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setTheatre(theatre => ({...theatre, name: e.target.value}))}
                value={theatre.name}/>
                <label>Address</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setTheatre(theatre => ({...theatre, address: e.target.value}))}
                value={theatre.address}/>
            <button
                onClick={() => updateTheatre(theatre.id, theatre)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteTheatre(theatre.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default TheatreEditorForm