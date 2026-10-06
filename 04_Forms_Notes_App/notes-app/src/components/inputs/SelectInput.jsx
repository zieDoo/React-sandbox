const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <select
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
      >
        {/* For options we get rid of hardcoded ones and  */}
        {/* We passing an options array thats gona have objects with a value and label*/}
        {/* So we create a list - take the options we pass in create a list with map.*/}
        {/* For each option we rended an option tag */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
