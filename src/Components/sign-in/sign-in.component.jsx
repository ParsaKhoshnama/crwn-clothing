import React from "react";

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustumButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils'

import { auth } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= async event => {

        event.preventDefault()
        const {email , password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'',password:''})
        } catch(error){
            console.error(error);
            
        }
      
    }

    handleChange=event=>{
        const {value,name}=event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" handlechange={this.handleChange} value={this.state.email} required/>
                    <FormInput name="password" type="password" label="password" handlechange={this.handleChange} value={this.state.password} required/>
                    <div className="buttons">
                        <CustumButton type="submit">Sign in</CustumButton>
                        <CustumButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustumButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn