class NotesController < ApplicationController
  def index

    render component: "Notes", props: {notes: Note.all}

  end

  def show

    note = (Note.find(params[:id]))

    render component: "Note", props: {note: note}

  end

  def new

    render component: "NoteNew"
  end

  def edit
    note = (Note.find(params[:id]))

    render component: "NoteEdit", props: {note: note}
  end

  def update
    note = (Note.find(params[:id]))
    if note.update(notes_params)
      redirect_to notes_path
    end
  end

  def create
    note = Note.new(notes_params)
    if note.save
      redirect_to notes_path
    end
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    
    redirect_to notes_path
  end

  # hidden
  private
  def notes_params
    params.require(:note).permit(:title, :description)
  end

end
