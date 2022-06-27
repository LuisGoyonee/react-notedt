import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
const Searchbar = ({ searchKeyword, term }) => {
  const inputElement = useRef("");
  const getSearchTerm = () => {
    searchKeyword(inputElement.current.value);
  };
  return (
    <>
      <div className="inputGroup">
        <form className="searchForm">
          <input
            ref={inputElement}
            type="text"
            className="searchInput outline-none"
            placeholder="Search"
            value={term}
            onChange={getSearchTerm}
          />
          <button type="submit" class="searchIcon">
            <BsSearch size={22} className="cursor-pointer searchIcon" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
