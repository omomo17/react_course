import PropTypes from "prop-types";
import { useState } from "react";

const Form = ({ onAddItem }) => {
  // ... rest of the code

  //ESLint
  Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
  };

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // e.preventDefault() prevents the default behavior of the form, which is to reload the page

    if (!description /* .trim() */) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="mt-8 p-4 bg-gradient-to-r from-pink-100 via-white to-pink-200 rounded-lg shadow-sm max-w-lg mx-auto flex items-center space-x-4"
      onSubmit={handleSubmit}
    >
      <select
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item name"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // !!! important example of how to use the onChange event
      />
      <button className="py-2 px-4 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-200">
        Add
      </button>
    </form>
  );
};

export default Form;
