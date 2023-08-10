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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Routes>
          <Route path="/" element={isLoading ? <Preloader /> : <Main />} />
          <Route path="/movies" element={isLoading ? <Preloader /> : <Movies />} />
          <Route path="/saved-movies" element={isLoading ? <Preloader /> : <SavedMovies />} />
          <Route path="/profile" element={isLoading ? <Preloader /> : <Profile />} />
          <Route path="/signup" element={isLoading ? <Preloader /> : <Register />} />
          <Route path="/signin" element={isLoading ? <Preloader /> : <Login />} />
          <Route path="/404" element={isLoading ? <Preloader /> : <NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <HamburgerMenu />
    </>
  );
}

export default App;
