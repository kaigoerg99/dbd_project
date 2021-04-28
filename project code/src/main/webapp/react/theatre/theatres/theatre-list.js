import TheatreEditorInline from "./theatre-editor-inline";
import theatreService, {findAllTheatres} from "./theatre-service"

const THEATRE_URL = "http://localhost:8080/api/theatres"
const { useState, useEffect } = React;

const TheatreList = () => {
    const [theatres, setTheatres] = useState([])
    const [newTheatre, setNewTheatre] = useState({})
    useEffect(() => {
        findAllTheatres()
    }, [])
    const createTheatre = (theatre) =>
        theatreService.createTheatre(theatre)
            .then(theatre => {
                setNewTheatre({title:''})
                setTheatres(theatres => ([...theatres, theatre]))
            })
    const updateTheatre = (id, newTheatre) =>
        theatreService.updateTheatre(id, newTheatre)
            .then(theatre => setTheatres(theatres => (theatres.map(theatre => theatre.id === id ? newTheatre : theatre))))
    const findAllTheatres = () =>
        theatreService.findAllTheatres()
            .then(theatres => setTheatres(theatres))
    const deleteTheatre = (id) =>
        theatreService.deleteTheatre(id)
            .then(theatres => setTheatres(theatres => theatres.filter(theatre => theatre.id !== id)))
    return(
        <div>
            <h2>Theatre List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Please enter a title for the new theatre"
                                   title="Please enter a title for the theatre" className="form-control" value={newTheatre.title}
                                   onChange={(e) => setNewTheatre(newTheatre => ({...newTheatre, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createTheatre(newTheatre)}></i>
                        </div>
                    </div>
                </li>
                {
                    theatres.map(theatre =>
                        <li key={theatre.id} className="list-group-item">
                            <TheatreEditorInline key={theatre.id}
                                                 updateTheatre={updateTheatre}
                                                 deleteTheatre={deleteTheatre}
                                                 theatre={theatre}/>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default TheatreList;