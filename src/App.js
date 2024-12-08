import logo from './logo.svg';
import React from 'react'
import {Routes,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import ShopPage from './Pages/ShopPage/ShopPage.component';



import Header from './Components/header/Header.component';

import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth , createUserProfileDocument} from './firebase/firebase.utils'


class App extends React.Component {

    constructor(props){

      super()

      this.state = {
        currentuser : null
      }
   }

   unsubscribeFromAuth = null


   componentDidMount(){
      
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
       /* this.setState({currentuser : user}) */ 
       if(userAuth){
          
         const userRef = await createUserProfileDocument(userAuth)

         this.setState({
          currentuser:{
            id : Object.keys(userRef)[0],
            data : userRef[Object.keys(userRef)[0]]
          }
         })
         
         
         
      //  console.log(user);
       }
       else{
        this.setState({
          currentuser : userAuth
        })
       }
        
      })
   }

   componentWillUnmount(){

      this.unsubscribeFromAuth()
   }

   render(){

      return (
        <div>
          <Header currentuser={this.state.currentuser}/>
          <Routes>
            <Route  path='/' Component={HomePage} />
            <Route  path='/shop' Component={ShopPage}/>
            <Route path='signin' Component={SignInAndSignUpPage} />
          </Routes>
        </div>
      )
   }

}

/*
 const App=()=> {
  return (
     <div>
      <Header></Header>
      <Routes>
        <Route  path='/' Component={HomePage} />
        <Route  path='/shop' Component={ShopPage}/>
        <Route path='signin' Component={SignInAndSignUpPage} />
      </Routes>
     </div>
  );
}*/

export default App;
