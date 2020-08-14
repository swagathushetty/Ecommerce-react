import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth,signInWithGoogle } from '../../firebase/firebase.utils.js'


import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }

    }
    handleSubmit=async(event)=>{
        event.preventDefault()

        const {email,password}=this.state

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

        
    }

    handleChange=(event)=>{
        const {value,name}=event.target

        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                       name="email"
                       type="email"
                       value={this.state.email} 
                       handleChange={this.handleChange} 
                       label="email"
                       required />
                    <FormInput name="password" 
                         type="password" 
                         value={this.state.password} 
                         handleChange={this.handleChange}
                         label="password" 
                         required />

                         <div className="buttons">
                            <CustomButton type="submit" >Signin</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >signin with google</CustomButton>
                         </div>
                   
                </form>
            </div>
        )
    }
}


export default SignIn