import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutUs = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-[#EEEEEE] ">
      <Navbar />
      <div className="text-[#222831] py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            Welcome to our fashion store! We are passionate about providing the
            latest trends in fashion to our customers. Our goal is to make you
            feel confident and stylish, whether you're dressing up for a special
            occasion or keeping it casual for everyday wear.
          </p>
          <p className="mb-4">
            Our curated collection features a wide range of clothing and
            accessories, handpicked to ensure quality and style. From timeless
            classics to the latest fashion-forward pieces, we have something for
            everyone.
          </p>
          <p className="mb-4">
            We believe that fashion should be accessible to all, which is why we
            offer competitive prices without compromising on quality. Our team
            is dedicated to providing excellent customer service, ensuring a
            seamless shopping experience from start to finish.
          </p>
          <Link to="/contact-us">
            <button className="bg-[#222831] hover:bg-black text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
