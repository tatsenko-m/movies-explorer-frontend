import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Main />} />
        <Route path="/movies" element={isLoading ? <Preloader /> : <Movies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
