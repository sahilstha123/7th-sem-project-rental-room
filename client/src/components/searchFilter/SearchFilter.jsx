import React, { useState, useEffect } from "react";
import "./searchfilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

export const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    property: searchParams.get("property") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || 2000,
    maxPrice: searchParams.get("maxPrice") || 40000,
    bedroom: searchParams.get("bedroom") || 1,
  });

  // Update searchParams whenever query changes
  useEffect(() => {
    setSearchParams(query);
  }, [query, setSearchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  // Function to update searchParams manually
  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{query.city}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            value={query.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            value={query.property}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="SingleRoom">Single Room</option>
            <option value="TwoRoom">Two Room</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            value={query.minPrice}
            onChange={handleChange}
            min={2000}
            max={40000}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            value={query.maxPrice}
            onChange={handleChange}
            min={2000}
            max={40000}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
            value={query.bedroom}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="searchButton" onClick={handleFilter}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "24px", color: "white" }}
          />
        </button>
      </div>
    </div>
  );
};
