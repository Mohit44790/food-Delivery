import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CuisineDropdown from './CuisineDropdown';
import topBrands from '../Data/topBrands';
import { foodItems } from '../Data/DatacollectionsJson';
import { useNavigate } from 'react-router-dom';

const DeliveryPage = () => {
  const foodRef = useRef(null);
  const brandRef = useRef(null);
  const navigate = useNavigate();

  const [foodScroll, setFoodScroll] = useState({ left: false, right: true });
  const [brandScroll, setBrandScroll] = useState({ left: false, right: true });
  const [foodImageLoaded, setFoodImageLoaded] = useState({});
  const [brandImageLoaded, setBrandImageLoaded] = useState({});

  const checkScroll = (ref, setScrollState) => {
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setScrollState({
      left: scrollLeft > 0,
      right: scrollLeft + clientWidth < scrollWidth - 5,
    });
  };

  const scroll = (ref, direction, setScrollState) => {
    const container = ref.current;
    const card = container.querySelector('div > div');
    if (!card) return;

    const cardStyle = window.getComputedStyle(card);
    const cardMarginRight = parseInt(cardStyle.marginRight || 0, 10);
    const scrollAmount = card.offsetWidth + cardMarginRight || 250;

    const newScrollPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollPosition, behavior: 'smooth' });

    setTimeout(() => checkScroll(ref, setScrollState), 400);
  };

  useEffect(() => {
    checkScroll(foodRef, setFoodScroll);
    checkScroll(brandRef, setBrandScroll);
    const handleResize = () => {
      checkScroll(foodRef, setFoodScroll);
      checkScroll(brandRef, setBrandScroll);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageLoad = (id, type) => {
    if (type === 'food') {
      setFoodImageLoaded((prev) => ({ ...prev, [id]: true }));
    } else {
      setBrandImageLoaded((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <div className="py-8">
      {/* Filters */}
      <div className="flex md:mx-32 flex-wrap gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 hover:bg-gray-100">
          Filters
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 hover:bg-gray-100">
          Pure Veg
        </button>
        <CuisineDropdown />
      </div>

      {/* Food Items Scrollable */}
      <div className="bg-gray-100">
        <h1 className="text-4xl font-semibold md:mx-32 py-4 mb-4">Inspiration for your first order</h1>
        <div className="relative py-2 mx-32">
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${!foodScroll.left ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(foodRef, 'left', setFoodScroll)}
            disabled={!foodScroll.left}
          >
            <IoIosArrowBack size={20} />
          </button>

          <div
            ref={foodRef}
            className="flex overflow-x-scroll no-scrollbar space-x-1 py-6 scroll-smooth px-4"
          >
            {foodItems.map((food) => (
              <div
                key={food.id}
                onClick={() => navigate(`/product/${food.name}/${food.id}`)}
                className="min-w-[220px] cursor-pointer flex-shrink-0 flex flex-col items-center justify-center text-center"
              >
                {!foodImageLoaded[food.id] && (
                  <div className="w-36 h-36 rounded-full bg-gray-300 animate-pulse mb-2" />
                )}
                <img
                  src={food.image}
                  alt={food.name}
                  className={`w-36 h-36 object-cover rounded-full transition-opacity duration-300 ${
                    foodImageLoaded[food.id] ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  onLoad={() => handleImageLoad(food.id, 'food')}
                />
                <p className="mt-2 text-sm font-medium">{food.name}</p>
              </div>
            ))}
          </div>

          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${!foodScroll.right ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(foodRef, 'right', setFoodScroll)}
            disabled={!foodScroll.right}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Top Brands */}
      <div className="mt-9">
        <h1 className="text-4xl font-semibold md:mx-32 py-4 mb-4">Top brands for you</h1>

        <div className="relative py-2 mx-32">
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${!brandScroll.left ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(brandRef, 'left', setBrandScroll)}
            disabled={!brandScroll.left}
          >
            <IoIosArrowBack size={20} />
          </button>

          <div
            ref={brandRef}
            className="flex overflow-x-scroll no-scrollbar space-x-1 py-6 scroll-smooth px-4"
          >
            {topBrands.map((brand) => (
              <div
                key={brand.id}
                className="min-w-[220px] flex-shrink-0 flex flex-col items-center justify-center text-center"
              >
                {!brandImageLoaded[brand.id] && (
                  <div className="w-36 h-36 rounded-full bg-gray-300 animate-pulse mb-2" />
                )}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className={`w-36 h-36 object-cover rounded-full transition-opacity duration-300 ${
                    brandImageLoaded[brand.id] ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  onLoad={() => handleImageLoad(brand.id, 'brand')}
                />
                <p className="mt-2 text-sm font-medium">{brand.name}</p>
                <p className="mt-1 text-sm font-medium">{brand.time}</p>
              </div>
            ))}
          </div>

          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${!brandScroll.right ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(brandRef, 'right', setBrandScroll)}
            disabled={!brandScroll.right}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="mx-32 mt-10">
        <h1 className="text-4xl font-semibold py-4 mb-4">Food Delivery Restaurants in Delhi NCR</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map((food, index) => (
            <div
              key={index}
              onClick={() => navigate(`/product/${food.name}/${food.id}`)}
              className="bg-white cursor-pointer hover:scale-105 transition-transform duration-300 shadow rounded-lg overflow-hidden"
            >
              <div className="w-full h-72 relative">
                {!foodImageLoaded[food.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}
                <img
                  src={food.image}
                  alt={food.title}
                  className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                    foodImageLoaded[food.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(food.id, 'food')}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <p className="font-semibold text-lg">{food.name}</p>
                  <p className="bg-green-500 px-2 text-white rounded-lg">{food.rating}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">₹ {food.price}</p>
                  <p className="text-sm text-gray-600">{food.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
