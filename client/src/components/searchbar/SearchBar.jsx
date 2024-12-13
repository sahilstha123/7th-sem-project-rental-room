import React from "react";
import "./searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <form action="">
        <input type="text" name="Location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={2000}
          max={45000}
          placeholder="MinPrice"
        />
        <input
          type="number"
          name="maxPrice"
          min={2000}
          max={45000}
          placeholder="MaxPrice"
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
