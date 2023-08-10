import { Note } from "../redux/notesSlice";

interface Prop {
  note: Note;
  setDialogNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
}

const NoteDialog: React.FC<Prop> = ({ note, setDialogNote }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => setDialogNote(undefined)}
    >
      <div
        className="bg-white p-5 rounded-xl max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-3 break-words text-sm">{note.content}</p>
        <p className="text-sm">{note.date}</p>
        <button
          className="bg-red-500 text-white rounded-lg px-2 py-1 mt-3"
          onClick={() => setDialogNote(undefined)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NoteDialog;
