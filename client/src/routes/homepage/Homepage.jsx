import React, { useContext } from "react";
import "./homepage.scss";
import Home from "../../assets/Home.jpg"; // Ensure the path to the image is correct
import { SearchBar } from "../../components/searchbar/SearchBar";
import { AuthContext } from "../../context/AuthContext";

export const Homepage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="wrapper">
        <div className="textContainer">
          <h1 className="title">
            Your Perfect Rental Room is Just a Click Away!
          </h1>
        </div>
        <p className="description">
          "Unlock comfort and convenience with <span>Smart Stay</span>. Find
          rooms tailored to your needs with AI-powered suggestions, seamless
          searches, and trusted listings—all designed to make your journey
          stress-free and enjoyable."
        </p>
        <SearchBar />
      </div>
      <div className="imgContainer">
        <img src={Home} alt="Home" />
      </div>
    </div>
  );
};
