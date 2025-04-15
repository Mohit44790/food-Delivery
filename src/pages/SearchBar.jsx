import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton for loading state
import { foodItems, collectionsData } from '../Data/DatacollectionsJson'; // Ensure this path is correct

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFilteredFoodItems([]);
      setFilteredCollections([]);
    } else {
      setLoading(true); // Start loading when searching
      const filteredFood = foodItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFoodItems(filteredFood);

      const filteredCollection = collectionsData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCollections(filteredCollection);
      setLoading(false); // Stop loading after filtering
    }
  };

  const handleItemClick = (itemId, type) => {
    setQuery('');
    setFilteredFoodItems([]);
    setFilteredCollections([]);
    if (type === 'food') {
      navigate(`/product/${itemId}`);
    } else {
      navigate(`/collection/${itemId}`);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setFilteredFoodItems([]);
    setFilteredCollections([]);
  };

  const handleNoResults = () => {
    if (query.trim() !== '') {
      navigate('/not-found'); // Redirect to a "not found" page if no results are found
    }
  };

  useEffect(() => {
    if (query && filteredFoodItems.length === 0 && filteredCollections.length === 0) {
      handleNoResults();
    }
  }, [filteredFoodItems, filteredCollections, query, navigate]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center px-4 py-2 bg-white">
        <IoSearchOutline className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search for restaurants, cuisine or a dish"
          value={query}
          onChange={handleSearch}
          className="flex-grow w-full outline-none text-sm"
        />
        {query && (
          <button onClick={clearSearch} className="text-gray-400 ml-2 text-sm">×</button>
        )}
      </div>

      {query && (
        <div className="absolute top-12 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto">
          {/* Loading Skeleton when filtering data */}
          {loading ? (
            <div>
              <div className="px-4 py-2 text-sm font-semibold text-gray-700">Food Items</div>
              <Skeleton count={6} height={40} className="mb-2" />
              <div className="px-4 py-2 text-sm font-semibold text-gray-700">Collections</div>
              <Skeleton count={6} height={40} className="mb-2" />
            </div>
          ) : (
            <>
              {/* Food Items Suggestions */}
              {filteredFoodItems.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">Food Items</div>
                  {filteredFoodItems.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleItemClick(item.id, 'food')}
                    >
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Collections Suggestions */}
              {filteredCollections.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">Collections</div>
                  {filteredCollections.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleItemClick(item.id, 'collection')}
                    >
                      <img src={item.img} alt={item.title} className="w-10 h-10 rounded-full" />
                      <span className="text-sm text-gray-700">{item.title}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* If no food items or collections are found */}
              {filteredFoodItems.length === 0 && filteredCollections.length === 0 && query && (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No results found for "{query}"
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
