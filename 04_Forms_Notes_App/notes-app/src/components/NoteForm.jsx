import { useState } from "react";

const NoteForm = () => {
  // We can have data object which has properties representing each input
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  // Our own handleChange function
  const handleChange = (e) => {
    // console.log(e.target.name);

    // This needs to be immutable so we are spreading a formData (...)
    setFormData({
      ...formData,
      // And then we replace chosen property, where we put actual value.
      [e.target.name]: e.target.value, // [title/category/priority]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormSubmitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          // To get a correct input, we assign a name which has to match with property name of our formData object
          name="title"
          type="text"
          className="w-full p-2 border rounded-lg"
          // But we need to replace title with our data object
          value={formData.title}
          // We also replace onChange function with our own 'handleChange' function
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          name="priority"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          name="category"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Ideas">Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          name="description"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
