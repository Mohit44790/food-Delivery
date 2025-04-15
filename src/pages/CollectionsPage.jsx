// CollectionsPage.jsx
import React from "react";
import {collectionsData} from "../Data/DatacollectionsJson"; // Adjust path to your json.js
import { Link } from "react-router-dom";
import ExploreNearby from "../components/ExploreNearby";
import { IoIosArrowForward } from "react-icons/io";


const CollectionsPage = () => {
  return (
    <div className="px-6 md:mx-32 py-1">
        <div className="flex text-sm text-gray-500 mb-4">
            <Link to={"/"}> <p>Home /</p></Link>
            <Link> <p>Delhi NCR /</p></Link>
            <Link>  <p>collections</p></Link>
        </div>
      <h1 className="text-3xl font-bold ">Collections - Delhi NCR</h1>
      <p className="mb-6 text-gray-400">Create and browse lists of the finest restaurants</p>
      <div className="flex space-x-8 items-center mb-4">
        <h1 className="text-2xl">Handpicked</h1>
        <h1 className="text-2xl">Saved Collections</h1>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collectionsData.map((item, id) => (
          <div
            key={id}
            className="rounded-xl md:w-64 h-80 relative overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 text-white rounded-b-md">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <h2 className="text-sm flex items-center  ">{item.places} <IoIosArrowForward  /></h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-2xl">Explore options near me</h1>
        <ExploreNearby/>
      </div>
    </div>
  );
};

export default CollectionsPage;
