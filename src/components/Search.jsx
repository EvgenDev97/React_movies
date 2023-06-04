import React, { useState } from "react";

const Search = (props) => {
  const { setQuery, setType, searchMovies } = props;

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies();
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilter = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            placeholder="Enter movie title..."
            type="search"
            className="validate"
            // value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button
            className="waves-effect waves-light btn-small"
            onClick={() => searchMovies()}
          >
            Search
          </button>
        </div>
        <div className="choice">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              onChange={handleFilter}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              onChange={handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="game"
                onChange={handleFilter}
              />
              <span>game</span>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
