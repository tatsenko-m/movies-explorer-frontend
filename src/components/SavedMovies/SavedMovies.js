import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({
  onGetSavedMovies,
  savedMovies,
  onSearchSavedMovies,
}) => {
  return (
    <>
      <SearchForm
        isSavedMovies={true}
        onSearchSavedMovies={onSearchSavedMovies}
      />
      <MoviesCardList
        isSavedMovies={true}
        isMoreButtonVisible={false}
        onGetSavedMovies={onGetSavedMovies}
        savedMovies={savedMovies}
      />
    </>
  );
};

export default SavedMovies;
