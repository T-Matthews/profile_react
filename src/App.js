import './css/App.css';
import React from 'react';
import Home from './views (pages)/Home';
import Contact from './views (pages)/Contact';
import Hobbies from './views (pages)/Hobbies';
import Previous from './views (pages)/Previous';
import Projects from './views (pages)/Projects';
import { Routes,Route } from 'react-router-dom';







function App() {


  return (
    <div className="App">
      <Routes>
        <Route children path='/' element={<Home/>}/>
        <Route children path='/contact' element={<Contact/>}/>
        <Route children path='/hobbies' element={<Hobbies/>}/>
        <Route children path='/previous' element={<Previous/>}/>
        <Route children path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
