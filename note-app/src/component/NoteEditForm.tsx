import { Note } from "../redux/notesSlice";

interface NoteFormProps {
  setEditingNote: React.Dispatch<React.SetStateAction<Note | undefined>>;
  handleEditNote: () => void;
  editingNote: Note;
}

const NoteEditForm: React.FC<NoteFormProps> = ({
  handleEditNote,
  editingNote,
  setEditingNote,
}) => {
  return (
    <li className="">
      <div
        className={
          `bg-[#ff9b73]` +
          " h-52 p-6 rounded-xl max-w-max flex flex-col justify-between ease-in-out transform transition-transform relative"
        }
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setEditingNote(undefined);
          }}
          className="absolute top-3 right-3"
        >
          <img src="/Cross.svg" alt="" className="w-7" />
        </button>

        <textarea
          name=""
          id=""
          onChange={(e) => {
            e.stopPropagation();
            setEditingNote({
              ...editingNote,
              content: e.target.value,
            });
          }}
          value={editingNote.content}
          cols={30}
          rows={10}
          className="bg-[#ff9b73] border-none resize-none outline-none placeholder:text-gray-900 placeholder:text-opacity-60"
          placeholder="Write your note here"
        ></textarea>
        <div className="flex justify-between items-center">
          <span className="text-sm">May 25, 2020</span>
          <button
            className="shadow bg-gradient-to-br from-sky-500 to-note-1 rounded text-lg px-3 text-center text-white "
            onClick={(e) => {
              e.stopPropagation();
              handleEditNote();
            }}
          >
            save
          </button>
        </div>
      </div>
    </li>
  );
};

export default NoteEditForm;
