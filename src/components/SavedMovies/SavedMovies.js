import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const SavedMovies = ({
  isLoading,
  onMovieDelete,
  savedMovies,
  savedMoviesSearchResult,
  isShortSavedMovies,
  onShortSavedMoviesCheck,
  onSearchSavedMovies,
  isNotFoundMovies,
}) => {
  return (
    <>
      <SearchForm
        isSavedMovies={true}
        isShortSavedMovies={isShortSavedMovies}
        onShortSavedMoviesCheck={onShortSavedMoviesCheck}
        onSearchSavedMovies={onSearchSavedMovies}
        savedMovies={savedMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSavedMovies={true}
          isNotFoundMovies={isNotFoundMovies}
          onMovieDelete={onMovieDelete}
          savedMovies={savedMoviesSearchResult}
        />
      )}
    </>
  );
};

export default SavedMovies;
