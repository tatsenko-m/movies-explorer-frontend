import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
