import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

const Movies = ({ isLoading, isShortMovies, onShortMoviesCheck, onSearchMovies, isNotFoundMovies, isMoviesError, onMovieClick, onMovieSave, movies }) => {
  const isSavedMovies = false;

  return (
    <>
      <SearchForm isShortMovies={isShortMovies} onShortMoviesCheck={onShortMoviesCheck} onSearchMovies={onSearchMovies} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          isMoreButtonVisible={true}
          isNotFoundMovies={isNotFoundMovies}
          isMoviesError={isMoviesError}
          onMovieClick={onMovieClick}
          onMovieSave={onMovieSave}
          movies={movies}
        >
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
          <MoviesCard isSavedMovies={isSavedMovies} isSaved={false} />
        </MoviesCardList>
      )}
    </>
  );
};

export default Movies;
