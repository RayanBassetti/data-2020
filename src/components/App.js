import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';


import Home from './home'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
