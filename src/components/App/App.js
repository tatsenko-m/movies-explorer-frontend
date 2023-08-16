import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { createHeaders } from "../../utils/headers";
import mainApi from "../../utils/MainApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
  const initialMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const [movies, setMovies] = React.useState(initialMovies);
  const [apiMovies, setApiMovies] = React.useState([]);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  const initialIsShortMovies =
    JSON.parse(localStorage.getItem("isShortMovies")) || false;
  const [isShortMovies, setIsShortMovies] =
    React.useState(initialIsShortMovies);
  const [isAuthError, setIsAuthError] = React.useState(false);
  const [authErrorMessage, setAuthErrorMessage] = React.useState("");
  const [userData, setUserData] = React.useState({ email: "" });

  const navigate = useNavigate();

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
            localStorage.removeItem("movies");
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
        localStorage.removeItem("movies");
        setMovies([]);
        setIsLoading(false);
      } else {
        localStorage.setItem("movies", JSON.stringify(result));
        setMovies(JSON.parse(localStorage.getItem("movies")));
        setIsLoading(false);
      }
    }
  }

  function handleRegister(name, email, password) {
    setIsAuthError(false);
    setAuthErrorMessage("");
    setIsLoading(true);

    mainApi
      .register(name, email, password)
      .then(() => {
        navigate("/movies");
      })
      .catch((err) => {
        setIsAuthError(true);
        if (err.status === 409) {
          setAuthErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setAuthErrorMessage(
            err.message || "При регистрации пользователя произошла ошибка."
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);

    mainApi
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          mainApi.setHeaders(createHeaders());
          setLoggedIn(true);
          setUserData({ email: email });
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
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
            element={
              isLoading ? (
                <Preloader />
              ) : (
                <Register
                  isAuthError={isAuthError}
                  authErrorMessage={authErrorMessage}
                  onRegister={handleRegister}
                />
              )
            }
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
