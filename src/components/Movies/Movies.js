import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const Movies = () => {
  const isSavedMovies = false;

  return (
    <>
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} isMoreButtonVisible={true}>
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
    </>
  );
};

export default Movies;