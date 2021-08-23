import React from 'react'

const Note = (props) => {
    return (
        <div style={{ backgroundColor: "#D3D3D3", border: "2px solid", margin: "20px", borderColor: "aqua"}}>
            <h1>{props.note.title}</h1>   
            <h4>{props.note.description}</h4>
            <a href="\">Home</a>
        </div>
    );
};

export default Note;