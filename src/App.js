import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import GoodPrice from './Components/GoodPrice';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GoodPrice/>
      <Footer/>
    </div>
  );
}

export default App;
