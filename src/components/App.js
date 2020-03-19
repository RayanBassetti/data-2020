import React from 'react';

import RoutingSwitch from './routes'
import NavMenu from './common/NavMenu';
import '../css/index.css';

function App() {
  return (
    <div className="app">
      <NavMenu />
      <RoutingSwitch />
    </div>
  );
}

export default App;