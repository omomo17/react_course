const Form = () => {
    return (
      <form className="mt-8 p-6 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            {Array.from({ length: 20 }, (_, i) =>
              i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))
            }
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            placeholder="Item name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <button className="w-full py-2 px-4 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-200">
          Add
        </button>
      </form>
    );
  };