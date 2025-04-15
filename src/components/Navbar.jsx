import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MdBrunchDining, MdDinnerDining, MdOutlineDeliveryDining } from "react-icons/md";

import SearchBar from '../pages/SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Dining");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false); // State for showing suggestions
  const navigate = useNavigate();



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(true); // Show suggestions when the user starts typing

    if (value.trim()) {
      setSelectedSuggestion(value); // Open the drawer if search query has a value
    } else {
      setSelectedSuggestion(null); // Close the drawer if the search query is cleared
    }
  };

  const handleSearchSelect = (item) => {
    setSearchQuery(item);
    setSelectedSuggestion(item); // Set selected suggestion to trigger the drawer
    setShowSuggestions(false); // Close suggestions after selection
    navigate(`/search/${item.toLowerCase()}`); // Redirect to the search page
  };

  const handleDrawerClose = () => {
    setSelectedSuggestion(null);
    setSearchQuery(""); // Optional: clear input after closing the drawer
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
        },
        () => alert("Unable to detect location. Please enable GPS.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`/${tabName.toLowerCase()}`);
  };

  return (
    <>
      <div className="w-full bg-white shadow-md relative z-50">
        <div className="flex items-center justify-between p-2 max-w-screen-xl mx-auto">
          <Link to={"/home"}><h1 className="text-2xl font-bold text-red-500">MK Resturants</h1></Link>

          <div className="hidden lg:flex items-center bg-white border rounded-md shadow px-4 py-3 space-x-2">
            <CiLocationOn size={22} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="outline-none text-sm w-40"
            />
            <button onClick={handleDetectLocation} className="text-xs text-blue-500 hover:underline">
              Detect Location
            </button>
            <span className="text-gray-400">|</span>
            <SearchBar />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
          <Link to={"/login"}>  <button className="text-gray-500 hover:text-black">Log in</button></Link>
          <Link to={"/signup"}>  <button className="text-gray-500 hover:text-black">Sign Up</button></Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 py-2 border-t space-y-4 bg-white">
            <div className="flex items-center border rounded-md shadow px-3 py-2 space-x-2">
              <CiLocationOn size={22} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none text-sm w-full"
              />
              <button onClick={handleDetectLocation} className="text-xs text-blue-500 hover:underline">
                Detect
              </button>
            </div>
            <div className="flex items-center border rounded-md shadow px-3 py-2 space-x-2">
              <CiSearch size={20} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search food..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="outline-none text-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-gray-600 hover:text-black text-left">Log in</button>
              <button className="text-gray-600 hover:text-black text-left">Sign Up</button>
            </div>
          </div>
        )}
      </div>

      {/* {location && ( */}
        <div className="flex justify-center border py-2 shadow-md gap-10 text-center">
          {["Dining", "Delivery", "Nightlife"].map((tab) => (
            <div
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer ${activeTab === tab ? "text-red-500 font-bold" : "text-gray-500"}`}
            >
              {
                {
                  Dining: <MdBrunchDining className="mx-auto text-2xl" />,
                  Delivery: <MdOutlineDeliveryDining className="mx-auto text-2xl" />,
                  Nightlife: <MdDinnerDining className="mx-auto text-2xl" />,
                }[tab]
              }
              <p>{tab}</p>
            </div>
          ))}
        </div>
      {/* )} */}

     
    </>
  );
};

export default Navbar;
