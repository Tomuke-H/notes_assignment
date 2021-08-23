import React from 'react'

const NoteEdit = (props) => {
    const { id, title, description } = props.note;

    return (
        <div style={{ backgroundColor: "#D3D3D3", border: "2px solid", margin: "20px", borderColor: "aqua"}}>
            <h1>Edit Note</h1>   
            <a href="/">Home</a>
            <form action={`/notes/${props.note.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <h6>Title</h6>
                <input defaultValue={title} name="note[title]" />
                <h6>Note Contents</h6>
                <textarea defaultValue={description} name="note[description]" />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default NoteEdit