import React from "react";

const FilterCheckbox = ({ isShortMovies, onShortMoviesCheck }) => {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox" onChange={onShortMoviesCheck} checked={isShortMovies} />
        <span className="filter__slider" />
      </label>
      <p className="filter__caption">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
