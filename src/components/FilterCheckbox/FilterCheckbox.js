import React from "react";

const FilterCheckbox = ({
  isSavedMovies,
  isShortMovies,
  isShortSavedMovies,
  onShortMoviesCheck,
  onShortSavedMoviesCheck,
}) => {
  return (
    <div className="filter">
      <label className="filter__label">
        <input
          type="checkbox"
          className="filter__checkbox"
          onChange={
            isSavedMovies ? onShortSavedMoviesCheck : onShortMoviesCheck
          }
          checked={isSavedMovies ? isShortSavedMovies : isShortMovies}
        />
        <span className="filter__slider" />
      </label>
      <p className="filter__caption">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
