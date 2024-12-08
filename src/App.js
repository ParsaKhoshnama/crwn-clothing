import logo from './logo.svg';
import React from 'react'
import {Routes,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage/HomePage.Component';
import ShopPage from './Pages/ShopPage/ShopPage.component';



import signUpContext from './contexts/signup-context';


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
         console.log('Nasrin Joonam 2');
        if(userRef)
         this.setState({
          currentuser:{
            id : Object.keys(userRef)[0],
            data : userRef[Object.keys(userRef)[0]]
          }
         })
         else{
          this.setState({
            currentuser : null
          })
         }
         
         
         
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

   signInAfterSignUp = (userRef)=>{

    if(userRef)
      this.setState({
       currentuser:{
         id : Object.keys(userRef)[0],
         data : userRef[Object.keys(userRef)[0]]
       }
      })
   }

   render(){

      return (
       <signUpContext.Provider value={this.signInAfterSignUp}>
        <div>
          <Header currentuser={this.state.currentuser}/>
          <Routes>
            <Route  path='/' Component={HomePage} />
            <Route  path='/shop' Component={ShopPage}/>
            <Route path='signin' Component={SignInAndSignUpPage} />
          </Routes>
        </div>
        </signUpContext.Provider>
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
