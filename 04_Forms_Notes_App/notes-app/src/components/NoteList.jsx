// We call notes props from Global state
// And we also call a deleteNote from App where we have our global state with notes.
const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id} // dont forget to add a key for rendering main wrapping element
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>

          <p className="text-sm text-gray-600">
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>

          {/* We create a delete button */}
          <button
            // We use an Arrow function as we want to pass id of specific note.
            onClick={() => deleteNote(note.id)}
            className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
