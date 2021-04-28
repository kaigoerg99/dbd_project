import theatreService from "./theatre-service";

const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const TheatreEditorInline = ({theatre, deleteTheatre, updateTheatre}) => {
    const [theatreCopy, setTheatreCopy] = useState(theatre)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={theatreCopy.title}
                            onChange={(e)=>setTheatreCopy(theatreCopy => ({...theatreCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateTheatre(theatreCopy.id, theatreCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteTheatre(theatre.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/theatres/${theatreCopy.id}`}>
                            {theatreCopy.title}
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default TheatreEditorInline;