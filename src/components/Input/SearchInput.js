import React, { useState } from "react";

const SearchInput = (props) => {
  const [query, setQuery] = useState("");
  const searchQuery = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    props.searchQuery(event.target.value);
  };
  return (
    <input
      className="search-contacts"
      type="text"
      placeholder="Search Contacts"
      value={query}
      onChange={(e) => {
        searchQuery(e);
      }}
    />
  );
};
export default SearchInput; 