import React, { useRef, useState, useEffect } from 'react';
import {  IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const collectionItems = [
  {
    title: 'Best Insta-worthy Place',
    places: '47 places',
    img: 'https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730709895.png?output-format=webp'
  },
  {
    title: 'Newly Open',
    places: '47 places',
    img: 'https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727170993.png?output-format=webp'
  },
  {
    title: 'Best Rooftop Place',
    places: '59 places',
    img: 'https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png?output-format=webp'
  },
  {
    title: 'Romantic',
    places: '47 places',
    img: 'https://b.zmtcdn.com/data/collections/2e8b954961d07f927802853d5944d67b_1733382559.png?output-format=webp'
  },
  {
    title: 'Top Breakfast',
    places: '47 places',
    img: 'https://b.zmtcdn.com/data/collections/f123375fee94c32136696c2af1e25a28_1740129938.png?output-format=webp'
  },
  {
    title: 'Secret Speakeasy Bars',
    places: '11 places',
    img: 'https://b.zmtcdn.com/data/collections/b2875b8fc68fe8a39633259c0db491c7_1741170543.png?output-format=webp'
  },
  {
    title: 'Must Visit Cafes',
    places: '47 places',
    img: 'https://b.zmtcdn.com/data/collections/92bf1f87ad0a90b94007e79b13eb592c_1727266460.png?output-format=webp'
  }
];

const NightlifePage = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const card = container.querySelector('div'); // First card
    if (!card) return;
  
    const cardStyle = window.getComputedStyle(card);
    const cardMarginRight = parseInt(cardStyle.marginRight);
    const scrollAmount = card.offsetWidth + cardMarginRight;
  
    const newScrollPosition = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
  
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  
    setTimeout(() => checkScroll(), 300);
  };
  

  return (
    <>
      <div className='bg-gray-100'>
        <div className='mx-4 md:mx-32 py-6'>
          <h1 className='text-3xl font-bold mb-2'>Collections</h1>
          <div className='flex justify-between items-center text-gray-700 flex-wrap'>
            <p className='text-lg '>
              Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
            </p>
            <Link to="/collections">
  <p className="text-red-500 cursor-pointer font-medium hover:underline flex items-center gap-1">
    All collections in Delhi NCR <IoMdArrowDropright />
  </p>
</Link>
          </div>

          <div className="relative">
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow  ${!canScrollLeft && 'opacity-30 cursor-not-allowed'}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <IoIosArrowBack size={30} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-hidden space-x-6 py-6 scroll-smooth"
            >
              {collectionItems.map((item, index) => (
                <div key={index} className="relative w-64 flex-shrink-0 h-80 mr-6">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 text-white rounded-b-md">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.places}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow  ${!canScrollRight && 'opacity-30 cursor-not-allowed'}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Pills Section */}
      <div className="mx-4 md:mx-32 py-6">
        <div className="flex flex-wrap gap-4">
          {['Filters', 'Offers', 'Rating: 4.5+', 'Pubs & bars'].map((text, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-400 hover:bg-gray-100"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className='mx-32 py-6'>
        <img src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" alt="img" />
        
      </div>
      <div className="mx-4 md:mx-32 py-6">
  <h1 className="text-3xl font-bold mb-6">Nightlife: Night clubs, pubs and bar in Delhi NCR</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {collectionItems.map((item, index) => (
      <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
        <div className="w-full h-48">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="font-semibold text-lg">{item.title}</p>
          <p className="text-sm text-gray-600">{item.places}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};




export default NightlifePage