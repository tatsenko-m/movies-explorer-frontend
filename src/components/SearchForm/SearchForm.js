import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  isShortMovies,
  onShortMoviesCheck,
  onSearchMovies,
  movies,
}) => {
  const [searchFormInput, setSearchFormInput] = React.useState("");

  function handleInputChange(evt) {
    setSearchFormInput(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchMovies(searchFormInput);
  }

  React.useEffect(() => {
    if (movies.length > 0 && searchFormInput.trim() !== "") {
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
