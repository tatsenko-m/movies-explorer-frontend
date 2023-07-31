import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main />
    </>
  );
}

export default App;
