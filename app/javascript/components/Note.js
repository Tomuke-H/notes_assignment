import React from 'react'

const Note = (props) => {
    return (
        <div>
            <h1>{props.note.title}</h1>   
            <h4>{props.note.description}</h4>
            <a href="\">Home</a>
        </div>
    );
};

export default Note;