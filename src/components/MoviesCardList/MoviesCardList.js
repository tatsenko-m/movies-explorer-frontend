import React from "react";

const MoviesCardList = ({ isSavedMovies, isMoreButtonVisible, children }) => {
  const moviesCardsClassName = `movies-cards ${
    isSavedMovies && "movies-cards_saved"
  }`;

  return (
    <section className={moviesCardsClassName}>
      <ul className="movies-cards__list">{children}</ul>
      {isMoreButtonVisible && (
        <button className="movies-cards__more-button">Ещё</button>
      )}
    </section>
  );
};

export default MoviesCardList;
