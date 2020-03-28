import React from 'react';

import NavMenu from './common/NavMenu';
import '../css/index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import RoutingSwitch from './routes';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <NavMenu />
        <RoutingSwitch />
      </ThemeContextProvider>
    </div>
  );
}

export default App;