import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";



const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const navigate = useNavigate();
  
  const { loading } = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      
      
      
      navigate("/login");
    } catch (err) {
    //   toast.error(err.message || "Signup failed")
    } finally {
      
    }
  };
     

  return (
    <div  className="flex  items-center justify-center min-h-screen bg-cover bg-center"
    // style={{
    //   backgroundImage: "url(https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg) ",
      
    // }}
    >
         <video
    src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
    autoPlay
    loop
    muted
   
    className="absolute inset-0 w-full h-full object-cover z-0"
 />
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        {/* Logo Animation */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png" // Replace with your logo
            alt="Logo"
            className="w-16 h-16 animate-bounce"
          />
        </div>
        
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Create An Account</h2>
        {/* {error && <p className="text-red-500 text-center">{error.message}</p>} */}
        <form onSubmit={submitHandler} className="space-y-4">
          <div >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button with Animation */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:scale-105 transition-transform duration-300"
          >
           {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
