import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  // It is Global State = because it's gona be used by multiple components, including NoteForm.
  const [notes, setNotes] = useState([]);

  // Adding delete function to remove specific note
  const deleteNote = (id) => {
    // we add also confirm window
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      {/* Adding a NoteList */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
