import React from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Preloader from "../Preloader/Preloader";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
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
import { handleSearchQuery } from "../../utils/filter-movies";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(
    Boolean(localStorage.getItem("token"))
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
  const initialMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const [movies, setMovies] = React.useState(initialMovies);
  const [apiMovies, setApiMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = React.useState(
    []
  );
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  const initialIsShortMovies =
    JSON.parse(localStorage.getItem("isShortMovies")) || false;
  const [isShortMovies, setIsShortMovies] =
    React.useState(initialIsShortMovies);
  const [isShortSavedMovies, setIsShortSavedMovies] = React.useState(false);
  const [isAuthError, setIsAuthError] = React.useState(false);
  const [authErrorMessage, setAuthErrorMessage] = React.useState("");
  const [isUpdateUserError, setIsUpdateUserError] = React.useState(false);
  const [isUpdateUserSuccess, setIsUpdateUserSuccess] = React.useState(false);
  const [updateUserErrorMessage, setUpdateUserErrorMessage] =
    React.useState("");
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" });

  const navigate = useNavigate();
  const location = useLocation();

  function handleHamburgerIconClick() {
    setIsHamburgerMenuOpen(true);
  }

  function closeHamburgerMenu() {
    setIsHamburgerMenuOpen(false);
  }

  function handleShortMoviesCheck(evt) {
    setIsShortMovies(evt.target.checked);
  }

  function handleShortSavedMoviesCheck(evt) {
    setIsShortSavedMovies(evt.target.checked);
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
          const result = handleSearchQuery(movies, searchQuery, isShortMovies);
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
      const result = handleSearchQuery(apiMovies, searchQuery, isShortMovies);
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

  function handleSearchSavedMovies(searchQuery) {
    setIsLoading(true);
    setIsNotFoundMovies(false);

    const result = handleSearchQuery(
      savedMovies,
      searchQuery,
      isShortSavedMovies
    );
    if (result.length === 0) {
      setSavedMoviesSearchResult([]);
      setIsNotFoundMovies(true);
    } else {
      setSavedMoviesSearchResult(result);
    }
    setIsLoading(false);
  }

  function handleRegister(name, email, password) {
    setIsAuthError(false);
    setAuthErrorMessage("");
    setIsRegistering(true);

    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
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
        setIsRegistering(false);
      });
  }

  function handleLogin(email, password) {
    setIsAuthError(false);
    setAuthErrorMessage("");
    setIsLoading(true);

    mainApi
      .authorize(email, password)
      .then((data) => {
        if (!data.token) {
          setIsAuthError(true);
          setAuthErrorMessage(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
          setIsLoading(false);
          return;
        }

        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        mainApi.setHeaders(createHeaders());
        mainApi
          .getUserInfo()
          .then((user) => {
            setCurrentUser({ name: user.name, email: user.email });
          })
          .catch((err) => {
            alert(err);
          });
        navigate("/movies");
      })
      .catch((err) => {
        setIsAuthError(true);
        if (err.status === 401) {
          setAuthErrorMessage("Вы ввели неправильный логин или пароль.");
        } else {
          setAuthErrorMessage(
            err.message || "При авторизации произошла ошибка."
          );
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(name, email) {
    setIsUpdateUserError(false);
    setUpdateUserErrorMessage("");
    setIsUpdateUserSuccess(false);
    setIsLoading(true);

    mainApi
      .setUserInfo(name, email)
      .then((updatedUser) => {
        setCurrentUser({ name: updatedUser.name, email: updatedUser.email });
        setIsUpdateUserSuccess(true);
      })
      .catch((err) => {
        setIsUpdateUserError(true);
        if (err.status === 409) {
          setAuthErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setAuthErrorMessage(
            err.message || "При обновлении профиля произошла ошибка."
          );
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    setMovies([]);
    setApiMovies([]);
    setIsShortMovies(false);
    setIsNotFoundMovies(false);
    setIsMoviesError(false);
    setCurrentUser({ name: "", email: "" });
    navigate("/");
  }

  function getSavedMovies() {
    setIsLoading(true);

    mainApi.setHeaders(createHeaders());
    mainApi
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    mainApi.setHeaders(createHeaders());
    mainApi
      .saveMovie(movie)
      .then((newSavedMovie) => setSavedMovies([newSavedMovie, ...savedMovies]))
      .catch((err) => alert(err));
  }

  function handleDeleteMovie(movieDBId) {
    mainApi.setHeaders(createHeaders());
    mainApi
      .deleteMovie(movieDBId)
      .then(() => {
        setSavedMovies(() => savedMovies.filter((m) => m._id !== movieDBId));
      })
      .catch((err) => alert(err));
  }

  React.useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.setHeaders(createHeaders());
      mainApi
        .getUserInfo()
        .then((user) => {
          if (user) {
            setLoggedIn(true);
            setCurrentUser({ name: user.name, email: user.email });
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setLoggedIn(false);
      setCurrentUser({ name: "", email: "" });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));
  }, [isShortMovies]);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setSavedMoviesSearchResult(savedMovies);
    }
  }, [savedMovies, location.pathname]);

  React.useEffect(() => {
    setIsAuthError(false);
  }, [location.pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} onOpenMenu={handleHamburgerIconClick} />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                isLoading={isLoading}
                isShortMovies={isShortMovies}
                onShortMoviesCheck={handleShortMoviesCheck}
                onSearchMovies={handleSearchMovies}
                isNotFoundMovies={isNotFoundMovies}
                isMoviesError={isMoviesError}
                onMovieSave={handleSaveMovie}
                onMovieDelete={handleDeleteMovie}
                savedMovies={savedMovies}
                movies={movies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                isLoading={isLoading}
                onMovieDelete={handleDeleteMovie}
                savedMovies={savedMovies}
                savedMoviesSearchResult={savedMoviesSearchResult}
                isShortSavedMovies={isShortSavedMovies}
                onShortSavedMoviesCheck={handleShortSavedMoviesCheck}
                onSearchSavedMovies={handleSearchSavedMovies}
                isNotFoundMovies={isNotFoundMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                isLoading={isLoading}
                isUpdateUserError={isUpdateUserError}
                updateUserErrorMessage={updateUserErrorMessage}
                isUpdateUserSuccess={isUpdateUserSuccess}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}
              />
            }
          />
          {loggedIn ? (
            <>
              <Route
                path="/signup"
                element={<Navigate to={location.state?.backUrl || "/"} />}
              />
              <Route
                path="/signin"
                element={<Navigate to={location.state?.backUrl || "/"} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/signup"
                element={
                  isRegistering || isLoading ? (
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
                element={
                  isLoading ? (
                    <Preloader />
                  ) : (
                    <Login
                      isAuthError={isAuthError}
                      authErrorMessage={authErrorMessage}
                      onLogin={handleLogin}
                    />
                  )
                }
              />
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <HamburgerMenu
        isOpen={isHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
