import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__search-bar">
          <input className="search__form-input" type="text" placeholder="Фильм" />
          <button className="search__form-button" type="submit">Поиск</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;