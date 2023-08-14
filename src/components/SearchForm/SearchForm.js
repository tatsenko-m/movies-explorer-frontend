import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  isShortMovies,
  onShortMoviesCheck,
  onSearchMovies,
}) => {
  const [searchFormInput, setSearchFormInput] = React.useState(() => {
    const storedValue = localStorage.getItem("searchFormInput");
    return storedValue ? storedValue : "";
  });

  React.useEffect(() => {
    localStorage.setItem("searchFormInput", searchFormInput);
  }, [searchFormInput]);

  function handleInputChange(evt) {
    setSearchFormInput(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchMovies(searchFormInput);
  }

  React.useEffect(() => {
    if (searchFormInput.trim() !== "") {
      onSearchMovies(searchFormInput);
    }
  }, [isShortMovies]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__search-bar">
          <input
            className="search__form-input"
            type="text"
            placeholder="Фильм"
            value={searchFormInput || ''}
            onChange={handleInputChange}
          />
          <button className="search__form-button" type="submit">
            Поиск
          </button>
        </div>
        <FilterCheckbox
          isShortMovies={isShortMovies}
          onShortMoviesCheck={onShortMoviesCheck}
        />
      </form>
    </section>
  );
};

export default SearchForm;
