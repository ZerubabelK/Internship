import classNames from "classnames";
import { Note, deleteNote } from "../redux/notesSlice";
import { useDispatch } from "react-redux";
interface NoteCardProps {
  note: Note;
  setEditingNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
  setDialogNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  setEditingNote,
  setDialogNote,
}) => {
  const dispatch = useDispatch();
  return (
    <li onClick={() => setDialogNote(note)}>
      <div
        className={classNames(
          " h-52 p-5 py-6 rounded-xl  flex flex-col justify-between relative cursor-pointer ease-in-out transform transition-transform hover:scale-105",
          {
            "bg-gradient-to-br from-[#F9A826] to-[#F86D34]":
              parseInt(note.id) === 1,
            "bg-gradient-to-br from-note-1 to-[#8d00c5d6]":
              parseInt(note.id) === 2,
            "bg-gradient-to-br from-note-3 to-[#ffcc00]":
              parseInt(note.id) === 3,
            "bg-gradient-to-br from-[#ffcc00] to-[#ffcc00]":
              parseInt(note.id) === 4,
            "bg-gradient-to-br from-[#F86D34] to-[#F9A826]":
              parseInt(note.id) === 5,
          }
        )}
      >
        <span
          className="bg-gradient-to-br from-red-500 to-orange-400 text-white absolute top-1 right-1 rounded-lg px-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteNote(note.id));
          }}
        >
          DEL
        </span>
        <p className="max-w-[23ch] break-words text-[#161516] h-full overflow-clip">
          {note.content}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm">{note.date}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditingNote(note);
            }}
          >
            <img src="/Edit.svg" alt="" className="w-7" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default NoteCard;
