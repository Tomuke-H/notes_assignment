class NotesController < ApplicationController
  def index


    # directs to all notes component
    render component: "Notes", props: {notes: Note.all}

  end

  def show

    note = (Note.find(params[:id]))
    
    # directs to show individual note component
    render component: "Note", props: {note: note}

  end

  def new

    # directs to new note component
    render component: "NoteNew"

  end

  def edit
    
    note = (Note.find(params[:id]))

    # directs to edit note component
    render component: "NoteEdit", props: {note: note}
  end

  def update
    
    # handles the update of a note
    note = (Note.find(params[:id]))

    # refreshes page
    if note.update(notes_params)
      redirect_to notes_path
    end
  end
  
  def create

    # handles the creation of new note
    note = Note.new(notes_params)

    # refreshes page
    if note.save
      redirect_to notes_path
    end
  end

  def destroy
    # destroys referenced note
    note = Note.find(params[:id])
    note.destroy
    
    # refreshes page
    redirect_to notes_path
  end

  # hidden
  private
  def notes_params
    params.require(:note).permit(:title, :description)
  end

end
