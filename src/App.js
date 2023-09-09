import logo from './logo.svg';
import React from 'react'
import {Routes,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';

const HatsPage=(props)=>{                              
  console.log(props)                                                                                  
  return(
  <div>
    <Link to="/">link to Home Page</Link>
    <h1>HATS PAGE</h1>
  </div>
  )
}

function App() {
  return (
     <div>
      <Routes>
        <Route  path='/' Component={HomePage} />
        <Route  path='/hats' Component={HatsPage}/>
      </Routes>
     </div>
  );
}

export default App;
