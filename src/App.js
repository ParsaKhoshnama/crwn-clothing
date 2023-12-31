import logo from './logo.svg';
import React from 'react'
import {Routes,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import ShopPage from './Pages/ShopPage/ShopPage.component';

import Header from './Components/header/Header.component';

 const App=()=> {
  return (
     <div>
      <Header></Header>
      <Routes>
        <Route  path='/' Component={HomePage} />
        <Route  path='/shop' Component={ShopPage}/>
      </Routes>
     </div>
  );
}

export default App;
