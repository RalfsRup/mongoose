import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App"> 
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        </Routes> 
    </BrowserRouter>
    </div> 
  );
};


export default App;
