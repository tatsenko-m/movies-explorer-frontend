import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
  const initialMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const [movies, setMovies] = React.useState(initialMovies);
  const [apiMovies, setApiMovies] = React.useState([]);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  const initialIsShortMovies = JSON.parse(localStorage.getItem("isShortMovies")) || false;
  const [isShortMovies, setIsShortMovies] = React.useState(initialIsShortMovies);

  function handleHamburgerIconClick() {
    setIsHamburgerMenuOpen(true);
  }

  function closeHamburgerMenu() {
    setIsHamburgerMenuOpen(false);
  }

  function handleShortMoviesCheck(evt) {
    setIsShortMovies(evt.target.checked);
  }

  function handleSearchQuery(movies, searchQuery) {
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

  function handleSearchMovies(searchQuery) {
    setIsLoading(true);
    setMovies([]);
    setIsNotFoundMovies(false);

    if (apiMovies.length === 0) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setApiMovies(movies);
          const result = handleSearchQuery(movies, searchQuery);
          if (result.length === 0) {
            setIsNotFoundMovies(true);
            setMovies([]);
          } else {
            localStorage.setItem("movies", JSON.stringify(result));
            setMovies(JSON.parse(localStorage.getItem("movies")));
          }
        })
        .catch(() => {
          setIsMoviesError(true);
          setMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      const result = handleSearchQuery(apiMovies, searchQuery);
      if (result.length === 0) {
        setIsNotFoundMovies(true);
        setMovies([]);
        setIsLoading(false);
      } else {
        localStorage.setItem("movies", JSON.stringify(result));
        setMovies(JSON.parse(localStorage.getItem("movies")));
        setIsLoading(false);
      }
    }
  }

  React.useEffect(() => {
    localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));
  }, [isShortMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} onOpenMenu={handleHamburgerIconClick} />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <Movies
                isLoading={isLoading}
                isShortMovies={isShortMovies}
                onShortMoviesCheck={handleShortMoviesCheck}
                onSearchMovies={handleSearchMovies}
                isNotFoundMovies={isNotFoundMovies}
                isMoviesError={isMoviesError}
                movies={movies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={isLoading ? <Preloader /> : <SavedMovies />}
          />
          <Route
            path="/profile"
            element={isLoading ? <Preloader /> : <Profile />}
          />
          <Route
            path="/signup"
            element={isLoading ? <Preloader /> : <Register />}
          />
          <Route
            path="/signin"
            element={isLoading ? <Preloader /> : <Login />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <HamburgerMenu
        isOpen={isHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      />
    </>
  );
}

export default App;
