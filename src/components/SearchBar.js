import React from "react";

export default function SearchBar(props) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.searchEntered();
      }}
    >
      <input
        className="input-field pl-4 shadow-md border-0 h-12 rounded-full font-bold searchBar"
        type="text"
        placeholder="Search for movies..."
        value={props.searchText}
        onChange={object => {
          props.setSearchText(object.target.value);
        }}
      />
    </form>
  );
}
