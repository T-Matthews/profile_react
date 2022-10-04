import './css/App.css';
import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Links from './components/links';





function App() {


  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Links/>
    </div>
  );
}

export default App;
