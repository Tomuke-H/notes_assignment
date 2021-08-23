import React from 'react'

const NoteNew = (props) => {
    return (
        
        // new note form

        <div style={{ backgroundColor: "#D3D3D3", border: "2px solid", margin: "20px", borderColor: "aqua"}}>
            <h1>New Note</h1>   
            <a href="/">Home</a>
            <form action="/notes" method="post">
                <h6>Title</h6>
                <input name="note[title]" />
                <h6>Note Contents</h6>
                <textarea name="note[description]" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default NoteNew