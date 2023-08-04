import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
