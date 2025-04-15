import { useState } from 'react';
import { useParams } from 'react-router-dom';
import foodItems from '../Data/DatacollectionsJson';
import { MdOutlineDirections } from 'react-icons/md';
import { RiShareForwardLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";

const TABS = ['Overview', 'Order Online', 'Reviews', 'Photos', 'Menu'];

const ProductDetail = () => {
  const { id } = useParams();
  const product = foodItems.find(item => item.id.toString() === id);
  const [activeTab, setActiveTab] = useState('Overview');

  if (!product) {
    return <div className="p-4 text-red-500">Item not found</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 mt-2 text-sm text-gray-400 space-x-1">
        <span>Home /</span>
        <span>India /</span>
        <span>Delhi NCR /</span>
        <span>Central Delhi /</span>
        <span>Pizza /</span>
      </div>

      <div className="p-4 md:px-8 lg:px-16 xl:px-32">
        {/* Title & Rating */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{product.name}</h1>
          <div className="flex flex-wrap items-start gap-4">
            <div className='flex items-center gap-2'>
              <span className='py-1 px-2 rounded-md text-white bg-yellow-300'>{product.rating}☆</span>
              <span className='text-sm text-gray-600'>4<br />Dining Ratings</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='bg-green-600 text-white rounded-md py-1 px-2'>{product.delivery}☆</span>
              <span className='text-sm text-gray-600'>{product.totalDelivery}<br />Delivery rating</span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-gray-400 mt-2">{product.title}</p>
        <p className="text-base sm:text-lg text-gray-500">{product.address}</p>

        {/* Info Row */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <p className="border rounded-full px-3 py-1 text-gray-500 text-sm">
            <span className="text-red-500">Closes in 1</span> hour 11am – 10:45pm (Today)
          </p>
          <span className="text-sm text-gray-600">📞 +91 1144724309</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
            <MdOutlineDirections className="text-red-400" /> Direction
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
            <RiShareForwardLine className="text-red-400" /> Share
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
            <TbMessages className="text-red-400" /> Reviews
          </button>
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 sm:h-72 md:h-80 lg:h-96 mt-4 object-cover rounded"
        />

        {/* Tabs */}
        <div className="flex overflow-x-auto mt-6 border-b gap-4">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`whitespace-nowrap py-2 px-2 text-base sm:text-lg font-medium border-b-4 transition-all duration-300 ${
                activeTab === tab
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-500 hover:text-red-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-sm sm:text-base">
          {activeTab === 'Overview' && (
            <>
              {product.description && <p className="text-gray-700">{product.description}</p>}
              <p className="mt-2 font-semibold">Price: ₹{product.price.toLocaleString()}</p>
              <p className="mt-2 text-gray-500">Estimated Time: {product.time}</p>
            </>
          )}

          {activeTab === 'Order Online' && (
            <p className="text-gray-700">Here goes the Order Online section.</p>
          )}

          {activeTab === 'Reviews' && (
            <p className="text-gray-700">User reviews section here.</p>
          )}

          {activeTab === 'Photos' && (
            <p className="text-gray-700">Photos of the place or food can go here.</p>
          )}

          {activeTab === 'Menu' && (
            <p className="text-gray-700">Digital menu listing items.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
