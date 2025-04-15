import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { collectionsData } from '../Data/DatacollectionsJson';

const DiningPage = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false);

  // Scroll event to detect when near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading &&
        visibleItems < collectionsData.length
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleItems((prev) => Math.min(prev + 4, collectionsData.length));
          setLoading(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, visibleItems]);

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

  const visibleCollections = collectionsData.slice(0, visibleItems);
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-gray-100'>
        <div className='mx-4 md:mx-32 py-6'>
          <h1 className='text-3xl font-bold mb-2'>Collections</h1>
          <div className='flex justify-between items-center text-gray-700 flex-wrap'>
            <p className='text-lg'>
              Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
            </p>
            <Link to="/collections">
              <p className="text-red-500 cursor-pointer font-medium hover:underline flex items-center gap-1">
                All collections in Delhi NCR <IoMdArrowDropright />
              </p>
            </Link>
          </div>

          <div className="relative mt-6">
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow ${!canScrollLeft && 'opacity-30 cursor-not-allowed'}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <IoIosArrowBack size={30} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-hidden space-x-4 py-6 scroll-smooth"
            >
              {visibleCollections.slice(0, 8).map((item) => (
                <div
                key={item.id}
                className="relative w-64 flex-shrink-0 h-80 mr-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => navigate(`/collection/${item.id}`)}
              >
              
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full  object-cover rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 text-white rounded-b-md">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm flex items-center">{item.places} <IoIosArrowForward /></p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow ${!canScrollRight && 'opacity-30 cursor-not-allowed'}`}
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
          {['Filters', 'Offers', 'Rating: 4.5+', 'Pet Friendly', 'Outdoor Seating', 'Service Alcohol', 'Open Now'].map((text, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-400 hover:bg-gray-100"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      <div className='mx-4 md:mx-32 py-6'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png"
          alt="Dining Banner"
          className="w-full"
        />
      </div>

      <div className="mx-4 md:mx-32 py-6">
        <h1 className="text-3xl font-bold mb-6">Best Food in Delhi NCR</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
  {/* Show only real loaded cards */}
  {collectionsData.slice(0, visibleItems).map((item, index) => (
    <div key={item.id}  onClick={() => navigate(`/collection/${item.id}`)} className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
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

  {/* If loading, show SkeletonCards separately */}
  {loading &&
    Array.from({ length: 4 }).map((_, index) => (
      <SkeletonCard key={`skeleton-${index}`} />
    ))}
</div>


 


      </div>
    </>
  );
};

export default DiningPage;
const SkeletonCard = () => (
    <div className="bg-white shadow rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
  