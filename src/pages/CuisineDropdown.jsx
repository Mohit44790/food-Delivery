import React, { useState } from 'react';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

const cuisinesList = [
  'North Indian', 'South Indian', 'Chinese', 'Italian',
  'Mexican', 'Thai', 'Mughlai', 'Punjabi', 'Gujarati'
];

const CuisineDropdown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const toggleCuisine = (cuisine) => {
    setSelected((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const filteredList = cuisinesList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const clearAll = () => {
    setSelected([]);
    setSearch('');
  };

  const applySelection = () => {
    setOpen(false);
    console.log('Applied:', selected);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        Cuisines <IoIosArrowDown />
      </button>

      {open && (
        <div className="absolute z-20 w-72 bg-white shadow-lg rounded-lg p-4 mt-2 space-y-3">
          {/* Header with Close Icon */}
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-gray-700">Select Cuisines</h2>
            <button onClick={() => setOpen(false)}>
              <IoIosClose size={22} />
            </button>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search cuisines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
          />

          {/* Cuisine Options */}
          <div className="max-h-40 overflow-y-auto space-y-2">
            {filteredList.length > 0 ? (
              filteredList.map((cuisine) => (
                <label
                  key={cuisine}
                  className="flex items-center gap-2 cursor-pointer text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(cuisine)}
                    onChange={() => toggleCuisine(cuisine)}
                  />
                  {cuisine}
                </label>
              ))
            ) : (
              <p className="text-sm text-gray-400">No cuisines found.</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-3">
            <button
              onClick={clearAll}
              className="text-xs text-red-500 hover:underline"
            >
              Clear All
            </button>
            <button
              onClick={applySelection}
              className="px-4 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuisineDropdown;
