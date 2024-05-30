import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard.jsx";
import { Book, SearchIcon, Star } from "lucide-react";
import Carousel from "./Carousel.jsx";
import { UserAuth } from "../context/AuthProvider.jsx";

const Landing = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      return navigate("/main");
    }
  }, [user]);

  return (
    <div className="items-center justify-center p-10 mt-10 flex flex-col gap-7">
      <h1 className="text-5xl font-bold w-full text-[#121e3e]">
        Welcome to Our <br />
        Bookstore
      </h1>
      <div>
        <p className="text-gray-500 font-normal">
          Discover your next great read. Sign in to access our full catalog.
        </p>
      </div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="bg-[#121e3e] px-7 py-2 text-white rounded-lg"
        >
          Sign In
        </button>
      </div>
      <div className="mt-24">
        <h1 className="text-4xl font-bold text-[#121e3e]">
          Features of Our Bookstore
        </h1>
        <p className="text-gray-500 font-normal mt-7">
          Discover the powerful features that make our bookstore the best choice
          for book lovers.
        </p>
        <div className="flex flex-col sm:flex-col md:flex-row gap-9 mt-24">
          <FeatureCard
            IconComponent={SearchIcon}
            title="Powerful Search"
            body="Find the perfect book with our advanced search functionality."
          />
          <FeatureCard
            IconComponent={Book}
            title="Personalized Recommendations"
            body="Get tailored book recommendations based on your reading history and preferences."
          />
          <FeatureCard
            IconComponent={Star}
            title="Customer Reviews"
            body="Read honest reviews from fellow book lovers to make informed decisions."
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-[#121e3e] mt-20">
        What Our Customers Say
      </h1>
      <p className="text-gray-500 font-normal">
        Hear from real customers about their experiences with our bookstore.
      </p>
      <Carousel />

      <div className="mt-24">
        <h1 className="text-4xl font-bold text-[#121e3e]">Featured Books</h1>
        <p className="text-gray-500 font-normal">
          Discover our latest and greatest book selections.
        </p>
      </div>
    </div>
  );
};

export default Landing;
