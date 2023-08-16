import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const SavedMovies = ({ onGetSavedMovies, savedMovies }) => {
  const isSavedMovies = true;

  return (
    <>
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} isMoreButtonVisible={false} onGetSavedMovies={onGetSavedMovies} savedMovies={savedMovies}>
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
      </MoviesCardList>
    </>
  );
};

export default SavedMovies;