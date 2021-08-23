import React from 'react';

const Notes = (props) => {
    const renderNotes = () => {
        return props.notes.map((note) => {
            return (
                <div style={{ border: "2px solid", backgroundColor: "#D3D3D3", margin: "20px", borderColor: "aqua",
                    display: "flex", flexDirection: "column", alignItems: "center", height: "300px", width: "450px"}}>
                    <h1>{note.title}</h1>  
                    <p>{note.description}</p>
                    <a href={`/notes/${note.id}`}>View</a>
                    <a href={`/notes/${note.id}/edit`}>Edit</a>
                    <a href={`/notes/${note.id}`} data-method="delete">Delete</a>
                </div>
            );
        });
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1>All Notes</h1>
            <a href="notes/new">New Note</a>
            {renderNotes()}
        </div>
    );
};

export default Notes;