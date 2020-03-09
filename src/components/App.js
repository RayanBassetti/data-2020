import React from 'react';

import '../css/index.css';

import Home from './Home'
// import Footer from './Footer'
import NavMenu from './NavMenu';

function App() {
  return (
    <div className="app_parent">
        <div className="app">
          <NavMenu />
          <Home />
        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
