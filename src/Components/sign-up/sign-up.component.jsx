import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustumButton from '../custom-button/custom-button.component'

import {auth , createUserProfileDocument} from '../../firebase/firebase.utils'

import { connect } from 'react-redux'

import signUpContext from '../../contexts/signup-context'

import { setCurrentUser } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            displayName : '',
            email : '',
            password :  '',
            confirmPassword : ''
        }

        
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName , email , password , confirmPassword} = this.state

        if (password != confirmPassword){

            alert("Password don\'t match")
            return
        }

        try {
           
          
          const { user } = await auth.createUserWithEmailAndPassword(email , password)
          
          const userRef = await createUserProfileDocument(user , {displayName})
          
          
          
          await this.context(userRef)
          
          this.setState({
            displayName : '',
            email : '',
            password :  '',
            confirmPassword : ''
        }) 

        } catch(error){
            console.error(error)
        }
    }


    handleChange = event => {
        const {name , value} = event.target
        
        
        this.setState({[name]: value})
    }

    render(){
        const {displayName , email , password , confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text' 
                    name='displayName' 
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required />
                    

                    <FormInput 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required />
                    

                    <FormInput 
                    type='password' 
                    name='password' 
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required />

                    <FormInput 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required />
                    
                    <CustumButton type='submit'>SIGN UP</CustumButton>
                </form>
            </div>
        )
    }
}

SignUp.contextType = signUpContext

export default SignUp
  