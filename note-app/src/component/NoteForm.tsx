interface NoteFormProps {
  setAddingNote: React.Dispatch<React.SetStateAction<boolean>>;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
  handleAddNote: () => void;
  addingNote: boolean;
}

const NoteForm: React.FC<NoteFormProps> = ({
  setAddingNote,
  setNewNote,
  handleAddNote,
  addingNote,
}) => {
  return (
    <li>
      <div
        className={
          `bg-[#ff9b73]` +
          " h-52 p-6 rounded-xl flex flex-col justify-between ease-in-out transform transition-transform relative"
        }
      >
        <button
          onClick={() => setAddingNote(!addingNote)}
          className="absolute top-3 right-3"
        >
          <img src="/Cross.svg" alt="" className="w-7" />
        </button>

        <textarea
          name=""
          id=""
          onChange={(e) => setNewNote(e.target.value)}
          cols={30}
          rows={10}
          className="bg-[#ff9b73] border-none resize-none outline-none placeholder:text-gray-900 placeholder:text-opacity-60"
          placeholder="Write your note here"
        ></textarea>
        <div className="flex justify-between items-center">
          <span className="text-sm">May 25, 2020</span>
          <button
            className="shadow bg-gradient-to-br from-sky-500 to-note-1 rounded text-lg px-3 text-center text-white "
            onClick={handleAddNote}
          >
            save
          </button>
        </div>
      </div>
    </li>
  );
};

export default NoteForm;
