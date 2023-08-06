import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
        <MoviesCard isSavedMovies={false} isSaved={false} />
      </ul>
      <button className="movies-cards__more-button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;