import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const SavedMovies = ({
  isLoading,
  onGetSavedMovies,
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
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSavedMovies={true}
          isNotFoundMovies={isNotFoundMovies}
          onGetSavedMovies={onGetSavedMovies}
          onMovieDelete={onMovieDelete}
          savedMovies={savedMoviesSearchResult}
          savedMoviesSearchResult={savedMoviesSearchResult}
        />
      )}
    </>
  );
};

export default SavedMovies;
