import React, { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-[#EEEEEE]">
      <Navbar />
      <div className=" text-[#222831]">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <div className=" mb-6">
            Don't have an account?, click here{" "}
            <Link to="/sign-up" className="font-semibold text-blue-500">
              Sign Up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#222831] hover:bg-black text-white font-bold py-2 px-4 rounded">
                Login
              </button>
              <Link className="text-red-500 font-semibold">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className=" bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
