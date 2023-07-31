import React from 'react';
import './App.css';

import Header from '../Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <Header loggedIn={loggedIn} />
  );
}

export default App;
