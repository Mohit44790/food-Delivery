import React from 'react';
import ToggleSection from './ToggleSection';

const ExploreNearby = () => {
  const cuisines = [
    "Bakery near me", "Beverages near me", "Biryani near me", "Burger near me", "Chinese near me", "Coffee near me",
    "Continental near me", "Desserts near me", "Italian near me", "Mithai near me", "Momos near me", "Mughlai near me",
    "North Indian near me", "Pasta near me", "Pizza near me", "Rolls near me", "Sandwich near me", "Shake near me",
    "South Indian near me", "Street near me"
  ];

  const restaurantTypes = [
    "Bakeries near me", "Bars near me", "Beverage Shops near me", "Bhojanalya near me", "Cafés near me", "Casual Dining near me",
    "Clubs near me", "Cocktail Bars near me", "Confectioneries near me", "Dessert Parlors near me", "Dhabas near me",
    "Fine Dining near me", "Food Courts near me", "Food Trucks near me", "Irani Cafes near me", "Kiosks near me",
    "Lounges near me", "Microbreweries near me", "Paan Shop near me", "Quick Bites near me", "Sweet Shops near me"
  ];

  const restaurantChains = [
    "Bikanervala", "Biryani Blues", "BTW", "Burger King", "Burger Singh", "Domino's", "Dunkin' Donuts",
    "Haldiram's", "KFC", "Krispy Kreme", "McDonald's", "Moti Mahal Delux", "Om Sweets & Snacks",
    "Pizza Hut", "Sagar Ratna", "Subway", "WOW! Momo"
  ];
  const deliveryCities = [
    "Delhi", "NCR", "Kolkata", "Mumbai", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Lucknow", "Kochi",
    "Jaipur", "Ahmedabad", "Chandigarh", "Goa", "Indore", "Gangtok", "Nashik", "Ooty", "Shimla", "Ludhiana",
    "Guwahati", "Amritsar", "Kanpur", "Allahabad", "Aurangabad", "Bhopal", "Ranchi", "Visakhapatnam", 
    "Bhubaneswar", "Coimbatore", "Mangalore", "Vadodara", "Nagpur", "Agra", "Dehradun", "Mysore", 
    "Puducherry", "Surat", "Varanasi", "Patna", "Udaipur", "Srinagar", "Khajuraho", "Neemrana", "Cuttack", 
    "Trivandrum", "Haridwar", "Leh", "Pushkar", "Rajkot", "Madurai", "Kozhikode", "Alappuzha", "Thrissur", 
    "Manipal", "Vijayawada", "Jodhpur", "Kota", "Ajmer", "Mussoorie", "Rishikesh", "Jalandhar", "Jammu", 
    "Manali"
  ];
  
  

  return (
    <div className="  mx-auto px-4 py-8">
      <ToggleSection title="Popular cuisines near me" items={cuisines} />
      <ToggleSection title="Popular restaurant types near me" items={restaurantTypes} />
      <ToggleSection title="Top restaurant chains" items={restaurantChains} />
      <ToggleSection title="Cities we deliver to" items={deliveryCities} />
    </div>
  );
};

export default ExploreNearby;
