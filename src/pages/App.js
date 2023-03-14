import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import CountryPage from './CountryPage/CountryPage';

function App() {
  

  return (
    <div className='app'>

    <Router>
          <Navbar/>
           
         <div className="container">
              <Routes>
            <Route path='/' element={<Home/>} />;
            <Route path='/country/:name' element={<CountryPage/>} />

          </Routes>
          </div>  
         
    </Router>
     
    </div>
  );
}

export default App;
