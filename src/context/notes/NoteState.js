import React, { useState } from "react"; // 1. useState import kiya
import NoteContext from "./noteContext";

const NoteState = (props) => {
    
    // 2. notesInitial variable banaya (Dummy Data)
    const notesInitial = [
        {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f119553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title 2",
            "description": "Please wake up early 2",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
         {
            "_id": "61322f119553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title 2",
            "description": "Please wake up early 2",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
         {
            "_id": "61322f119553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title 2",
            "description": "Please wake up early 2",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        }, {
            "_id": "61322f119553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title 2",
            "description": "Please wake up early 2",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
         {
            "_id": "61322f119553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": "My Title 2",
            "description": "Please wake up early 2",
            "tag": "Personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        }
    ]
    

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;