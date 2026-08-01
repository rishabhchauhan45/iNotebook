import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        // Call addNote function from context
        addNote(note.title, note.description, note.tag);
        // Clear the form after adding
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-4">
            <div className="premium-card p-4">
                <h2 className="mb-4">Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required placeholder="Enter note title..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label fw-bold">Description</label>
                        <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required rows="3" placeholder="Enter note description..."></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tag" className="form-label fw-bold">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required placeholder="e.g. Personal, Work..." />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn-gradient px-4 py-2" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote