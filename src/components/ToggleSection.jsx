import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ToggleSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const visibleItems = isOpen ? items : items.slice(0, 0); // Show first 6 by default

  return (
    <div className="mb-6 border p-4 rounded-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
      </div>

      <div className="mt-2  flex flex-wrap gap-2">
        {visibleItems.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToggleSection;
