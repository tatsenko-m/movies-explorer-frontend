export function handleSearchQuery(movies, searchQuery, isShortMovies) {
  const isCyrillic = /[а-яА-ЯЁё]/.test(searchQuery);

  const searchPattern = new RegExp(searchQuery, "i");

  const filterMovies = (movie) => {
    const searchField = isCyrillic ? "nameRU" : "nameEN";
    const name = movie[searchField];

    if (isShortMovies) {
      return searchPattern.test(name) && movie.duration <= 40;
    } else {
      return searchPattern.test(name);
    }
  };

  return movies.filter(filterMovies);
}
