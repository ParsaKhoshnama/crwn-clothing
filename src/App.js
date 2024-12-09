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

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  /*  constructor(props){

      super(props)

      this.state = {
        currentuser : null
      }
   } */

   unsubscribeFromAuth = null


   componentDidMount(){

      const {setCurrentUser} = this.props
      
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
       
       /* this.setState({currentuser : user}) */ 
       if(userAuth){
          
         const userRef = await createUserProfileDocument(userAuth)
         if(userRef){
      /*   this.setState({
          currentuser:{
            id : Object.keys(userRef)[0],
            data : userRef[Object.keys(userRef)[0]]
          }
         })*/
            setCurrentUser({
              id : Object.keys(userRef)[0],
              data : userRef[Object.keys(userRef)[0]]
           })
         }
         
         
       }
       else{
        
        
       /* this.setState({
          currentuser : userAuth
        })*/
          setCurrentUser(userAuth)
       }
        
      })
   }

   componentWillUnmount(){

      this.unsubscribeFromAuth()
   }

   signInAfterSignUp = async userRef=>{

    if(userRef){ 

       this.props.setCurrentUser({
        id : Object.keys(userRef)[0],
       data : userRef[Object.keys(userRef)[0]]
      })

      
    }
   }

   render(){

      return (
       <signUpContext.Provider value={this.signInAfterSignUp}>
        <div>
          <Header />
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


const mapDispatchoProps = dispatch =>({

  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchoProps)(App);
