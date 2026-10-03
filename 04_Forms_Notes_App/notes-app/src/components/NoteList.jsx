// We call notes props from Global state
const NoteList = ({ notes }) => {
  // here we check if there is any notes in array
  if (notes.length === 0) {
    // if array is empty
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  // otherwise we return our notes
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id} // dont forget to add a key for rendering main wrapping element
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          {/* Add a title from our object */}
          <h3 className="text-lg font-bold">{note.title}</h3>
          {/* Add a rest of the properties */}
          <p className="text-sm text-gray-600">
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
