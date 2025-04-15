import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const sampleData = [
  { id: 1, name: 'Pizza', image: 'https://source.unsplash.com/200x120/?pizza' },
  { id: 2, name: 'Burger', image: 'https://source.unsplash.com/200x120/?burger' },
  { id: 3, name: 'Biryani', image: 'https://source.unsplash.com/200x120/?biryani' },
];

const SearchResults = () => {
  const { query } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const results = sampleData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  }, [query]);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="shadow p-4 rounded bg-white">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <p className="mt-2 text-center font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
