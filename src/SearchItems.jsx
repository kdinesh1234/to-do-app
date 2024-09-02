import React from "react";

const SearchItems = ({ searchItem, setSearchItem }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="searchItems"
        placeholder="Search Items"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <label htmlFor="searchItems">Search Items</label>
    </form>
  );
};

export default SearchItems;