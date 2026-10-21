import { useState, useEffect } from "react"; // we add useEffect hook
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  // But our useEffect runs whenever notes changes, including when it sets Initial state [].
  // So notes array will be empty because after refresh, the initial tet is set again and
  // Overwriting what is set in Local Storage.

  // SOLUTION is: To go to use state and instead of to have an empty array, we pass a function, which returns what get set to notes as initial value.
  // const [notes, setNotes] = useState([]);  // original

  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
    // We return notes, but if nothing is in Local Storage, return empty array.
  });

  useEffect(() => {
    // And we want to local storage and pass a notes to the array.
    localStorage.setItem("notes", JSON.stringify(notes));
    // We add notes to our Dependency Array, because we want to run this, whenever the notes are changes.
  }, [notes]);

  const deleteNote = (id) => {
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

      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
