import React from 'react';

import '../css/index.css';

import Home from './Home'
import NavMenu from './NavMenu';

function App() {
  return (
      <div className="app">
        <NavMenu />
        <Home />
      </div>
  );
}

export default App;
