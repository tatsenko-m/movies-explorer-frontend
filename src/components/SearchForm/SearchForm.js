import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  isSavedMovies,
  isShortMovies,
  isShortSavedMovies,
  onShortMoviesCheck,
  onShortSavedMoviesCheck,
  onSearchMovies,
  onSearchSavedMovies,
  savedMovies,
}) => {
  const [searchFormInput, setSearchFormInput] = React.useState(() => {
    if (isSavedMovies) {
      return "";
    } else {
      const storedValue = localStorage.getItem("searchFormInput");
      return storedValue ? storedValue : "";
    }
  });

  const [inputError, setInputError] = React.useState(false);
  const [inputChanged, setInputChanged] = React.useState(false);

  function handleInputChange(evt) {
    setSearchFormInput(evt.target.value);
    setInputChanged(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchFormInput.trim() !== "") {
      setInputError(false);
      if (isSavedMovies) {
        onSearchSavedMovies(searchFormInput);
      } else {
        onSearchMovies(searchFormInput);
        localStorage.setItem("searchFormInput", searchFormInput);
      }
      setInputChanged(false);
    } else {
      setInputError(true);
    }
  }

  React.useEffect(() => {
    if (!isSavedMovies) {
      const storedValue = localStorage.getItem("searchFormInput");
      if (!inputChanged && storedValue) {
        setSearchFormInput(storedValue);
        onSearchMovies(storedValue);
      }
    } else {
      if (!inputChanged && searchFormInput) {
        onSearchSavedMovies(searchFormInput);
      }
    }
  }, [
    isShortMovies,
    isShortSavedMovies,
    isSavedMovies,
    savedMovies,
    inputChanged,
    onSearchMovies,
    searchFormInput,
    onSearchSavedMovies,
  ]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__search-bar">
          <input
            className="search__form-input"
            type="text"
            placeholder="Фильм"
            value={searchFormInput || ""}
            onChange={handleInputChange}
          />
          <button className="search__form-button" type="submit">
            Поиск
          </button>
        </div>
        <span className="search__error">
          {inputError && "Нужно ввести ключевое слово"}
        </span>
        <FilterCheckbox
          isSavedMovies={isSavedMovies}
          isShortMovies={isShortMovies}
          isShortSavedMovies={isShortSavedMovies}
          onShortMoviesCheck={onShortMoviesCheck}
          onShortSavedMoviesCheck={onShortSavedMoviesCheck}
        />
      </form>
    </section>
  );
};

export default SearchForm;
