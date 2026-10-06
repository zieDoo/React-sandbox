// We will take these props from the form input
const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    // Anything what is hardcoded, we want to replace with these dynamic values from props.
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
