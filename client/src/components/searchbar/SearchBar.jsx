import React, { useState } from "react";
import "./searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState({
    city: "",
    minPrice: 2000,
    maxPrice: 40000,
  });

  const navigate = useNavigate(); // hook for programmatic navigation

  const handleChange = (e) => {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Programmatically navigate to the list page with the query params
    navigate(
      `/list?city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
    );
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          value={query.city}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={2000}
          max={40000}
          value={query.minPrice}
          placeholder="MinPrice"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={2000}
          max={40000}
          value={query.maxPrice}
          placeholder="MaxPrice"
          onChange={handleChange}
        />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "24px", color: "white" }}
          />
        </button>
      </form>
    </div>
  );
};
