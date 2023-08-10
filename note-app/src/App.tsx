import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Note, addNote, editNote } from "./redux/notesSlice";
import { RootState } from "./redux/store";
import NoteCard from "./component/NoteCard";
import NoteEditForm from "./component/NoteEditForm";
import NoteForm from "./component/NoteForm";
import NoteDialog from "./component/NoteDialog";

function App() {
  const [newNote, setNewNote] = useState<string>("");
  const [addingNote, setAddingNote] = useState<boolean>(false);
  const [editingNote, setEditingNote] = useState<Note>();
  const [dialogNote, setDialogNote] = useState<Note>();
  const { notes } = useSelector((state: RootState) => state.notes);

  const dispatch = useDispatch();

  const handleAddNote = () => {
    const note: Note = {
      id: Math.random().toString(36).substr(2, 9),
      content: newNote,
      date: new Date().toLocaleDateString(),
    };
    dispatch(addNote(note));
    setAddingNote(!addingNote);
  };

  const handleEditNote = () => {
    dispatch(editNote(editingNote!));
    setEditingNote(undefined);
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto text-[#332919]">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl my-10">Notes</h1>
          <button onClick={() => setAddingNote(!addingNote)}>
            {!addingNote ? (
              <img src="/Add.svg" alt="" className="w-12" />
            ) : (
              <></>
            )}
          </button>
        </div>
        <div className="">
          <ul className="grid lg:grid-cols-3 lg:px-0 px-3 grid-cols-1 gap-5 transition-all">
            {addingNote && (
              <NoteForm
                handleAddNote={handleAddNote}
                setAddingNote={setAddingNote}
                setNewNote={setNewNote}
                addingNote={addingNote}
              />
            )}
            {notes.map((note, i) =>
              editingNote && editingNote.id === note.id ? (
                <NoteEditForm
                  handleEditNote={handleEditNote}
                  setEditingNote={setEditingNote}
                  editingNote={editingNote}
                  key={i}
                />
              ) : (
                <NoteCard
                  note={note}
                  setEditingNote={setEditingNote}
                  key={i}
                  setDialogNote={setDialogNote}
                />
              )
            )}
          </ul>
        </div>
        {dialogNote && (
          <NoteDialog note={dialogNote} setDialogNote={setDialogNote} />
        )}
      </div>
    </div>
  );
}

export default App;
