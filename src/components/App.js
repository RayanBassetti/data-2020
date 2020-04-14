import React, { useContext } from 'react';

import NavMenu from './common/NavMenu';
import '../css/index.css';
import {ThemeContext} from './contexts/ThemeContext';
import RoutingSwitch from './routes';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`}>
        <RoutingSwitch />
    </div>
  );
}

export default App;