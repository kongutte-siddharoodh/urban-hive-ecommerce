import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Add your signup logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      fullName: "",
      contactNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className=" flex flex-col justify-between h-screen bg-[#EEEEEE]">
      <Navbar />
      <div className="bg-[#EEEEEE] text-[#222831] py-6">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <div className=" mb-6">
            Already have an account?, click here{" "}
            <Link to="/login" className="font-semibold text-blue-500">
              Login
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="fullName" className="block text-lg font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="contactNumber"
                  className="block text-lg font-medium">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-[#222831]"
                  required
                />
              </div>
            </div>
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
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="password" className="block text-lg font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-[#222831]"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-lg font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-[#222831]"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#222831] hover:bg-black text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
