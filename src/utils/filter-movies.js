import { SHORT_MOVIE_DURATION } from "../constants/config";

export function handleSearchQuery(movies, searchQuery, isShortMovies) {
  const isCyrillic = /[а-яА-ЯЁё]/.test(searchQuery);

  const searchPattern = new RegExp(searchQuery, "i");

  const filterMovies = (movie) => {
    const searchField = isCyrillic ? "nameRU" : "nameEN";
    const name = movie[searchField];

    if (isShortMovies) {
      return searchPattern.test(name) && movie.duration <= SHORT_MOVIE_DURATION;
    } else {
      return searchPattern.test(name);
    }
  };

  return movies.filter(filterMovies);
}
