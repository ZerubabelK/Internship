import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  content: string;
  date: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      id: "1",
      content: "Remember to buy groceries on the way home.",
      date: "2023-08-10",
    },
    {
      id: "2",
      content: "Prepare for the meeting with clients at 2 PM.",
      date: "2023-08-10",
    },
    {
      id: "3",
      content: "Call John to wish him a happy birthday.",
      date: "2023-08-09",
    },
    {
      id: "4",
      content: "Finish the report and submit it by tomorrow.",
      date: "2023-08-08",
    },
    {
      id: "5",
      content: "Book flight tickets for the vacation next month.",
      date: "2023-08-07",
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, content, date } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.content = content;
        existingNote.date = date;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;
