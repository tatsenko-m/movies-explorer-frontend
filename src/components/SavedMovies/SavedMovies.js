import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const SavedMovies = () => {
  const isSavedMovies = true;

  return (
    <>
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} isMoreButtonVisible={false}>
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
      </MoviesCardList>
    </>
  );
};

export default SavedMovies;