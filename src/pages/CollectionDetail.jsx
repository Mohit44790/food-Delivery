import React from 'react';
import { useParams } from 'react-router-dom';
import { collectionsData } from '../Data/DatacollectionsJson';

const CollectionDetail = () => {
  const { id } = useParams();
  const collection = collectionsData.find(item => item.id.toString() === id);

  if (!collection) {
    return <div className="p-4 text-red-500">Collection not found</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 mt-2 text-sm text-gray-400 space-x-1">
        <span>Home /</span>
        <span>Delhi NCR /</span>
        <span>Collection /</span>
        <span>{collection.title}</span>
      </div>

      {/* Hero Section with Text on Image */}
      <div className="p-4 md:px-8 lg:px-16 xl:px-32">
        <div className="relative w-full h-72 sm:h-80 md:h-96 rounded overflow-hidden mb-6">
          <img
            src={collection.img}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-end p-4">
            <div className="text-white bg-black bg-opacity-70 p-2 rounded-lg space-y-2">
                <p className='text-gray-200 mt-4'>Collections</p>
              <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold">{collection.title}</h1>
              <p className="text-sm sm:text-base">{collection.description}</p>
              <p className="text-sm mb-4 text-gray-300">{collection.places}</p>
            </div>
            <div className="absolute top-5 right-4 z-10">
  <div className="flex space-x-2">
    <button className="bg-black bg-opacity-60 text-white rounded-full py-2 px-4 text-sm hover:bg-opacity-80 transition">
      + Save Collection
    </button>
    <button className="bg-black bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition">
      🔗
    </button>
  </div>
</div>

          </div>
        </div>

        {/* Collection Info Section */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4">Food Items in this Collection:</h2>
          <ul>
            {collection.foodItems && collection.foodItems.length > 0 ? (
              collection.foodItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3 mb-4">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                  <span className="text-sm text-gray-700">{item.name}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No food items found in this collection.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CollectionDetail;
