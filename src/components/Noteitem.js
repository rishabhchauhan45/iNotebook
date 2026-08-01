import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    // Destructure updateNote from props (Passed from Notes.js)
    const { note, updateNote } = props; 

    return (
        <div className="col-md-4">
            <div className="card my-3 premium-card">
                <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                        <h5 className="card-title">{note.title}</h5>
                        
                        {/* Delete Icon: Deletes the note */}
                        <i className="fa-solid fa-trash-can mx-2" style={{cursor: "pointer"}} onClick={()=>{deleteNote(note._id)}}></i>
                        
                        {/* Edit Icon: Opens the Edit Modal */}
                        <i className="fa-solid fa-pen-to-square mx-2" style={{cursor: "pointer"}} onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem
