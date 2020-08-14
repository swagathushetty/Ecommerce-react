import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

import Header from '../src/components/header/header'
import HomePage from '../src/components/pages/homepage/homepageComponent';
import ShopPage from './components/shop/shop'
import SignInAndSignUp from '../src/components/pages/signin-and-signup/signin-and-signup'

import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'


import './App.css';



class App extends React.Component {
  // constructor(){
  //   super()

  //   this.state={
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth = null


  componentDidMount(){
    const {setCurrentUser} =this.props
      auth.onAuthStateChanged(async userAuth=>{
          if(userAuth){
                const userRef=await createUserProfileDocument(userAuth)
                // console.log(userRef)

                userRef.onSnapshot(snapShot=>{
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }) 
                 })
               
          }
          setCurrentUser(userAuth)
        console.log(this.state)
      })

      


  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  
  render(){
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={ShopPage} />
            <Route 
                exact
                path='/signin'
                render={ ()=>
                  this.props.currentUser ? 
                  ( <Redirect to='/'/>) 
                  :
                  ( <SignInAndSignUp />) 
                } 
             />
          </Switch>
        </div>
      );
  }

}

//getting state.user.currentUser
const mapStateToProps=({user})=>{
  return {
    currentUser: user.currentUser
  }  
}

const mapDispatchToProps=dispatch=>{
  return {
    setCurrentUser:user=>dispatch(setCurrentUser(user))
  }
}

//null as we dont need the state
export default connect(mapStateToProps,mapDispatchToProps)(App);
