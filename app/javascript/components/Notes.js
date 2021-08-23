import React from 'react';

const Notes = (props) => {
    const renderNotes = () => {
        return props.notes.map((note) => {
            return (
                <div style={{ border: "2px solid", margin: "20px", borderColor: "aqua"}}>
                    <h1>{note.title}</h1>  
                    <p>{note.description}</p>
                    <a href={`/notes/${note.id}`}>View</a>
                    <a href={`/notes/${note.id}/edit`}>Edit</a>
                </div>
            );
        });
    };
    return (
        <div style={{ backgroundColor: "#848789"}}>
            <h1>All Notes</h1>
            <a href="notes/new">New Note</a>
            {renderNotes()}
        </div>
    );
};

export default Notes;