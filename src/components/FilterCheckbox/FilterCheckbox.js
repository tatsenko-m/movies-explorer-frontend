import React from "react";

const FilterCheckbox = () => {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox" />
        <span className="filter__slider" />
      </label>
      <p className="filter__caption">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
