import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  return (
    // mb-6 = margin-bottom: 6px (for spacing)
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={title} // binding value to that title
          // if onChange is not defined, we get an error.
          // So we either add default value or onChange handler.
          onChange={(e) => setTitle(e.target.value)}
          // e.target = actual element
          // e.target.value = actual value of the element.
        />
      </div>
    </form>
  );
};

export default NoteForm;
