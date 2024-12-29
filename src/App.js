import logo from './logo.svg';
import React from 'react'
import {Routes,Route,Switch,Link,Redirect} from 'react-router-dom'
import './App.css';
import withRouter from './Components/withRouter/withRouter';
import HomePage from './Pages/HomePage/HomePage.Component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import CheckoutPage from './Pages/Checkout/checkout.component';

import signUpContext from './contexts/signup-context';


import Header from './Components/header/Header.component';

import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth , createUserProfileDocument} from './firebase/firebase.utils'

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors'

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

      this.props.navigate('/')

      
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
            <Route path='/signin' Component={SignInAndSignUpPage}  />
            <Route path='/checkout' Component={CheckoutPage} />
          </Routes>
        </div>
        </signUpContext.Provider>
      )
   }

}


const mapDispatchProps = dispatch =>({

  setCurrentUser : user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({

    currentUser : selectCurrentUser
})


export default withRouter(connect(mapStateToProps,mapDispatchProps)(App));
