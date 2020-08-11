import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/header/header'
import HomePage from '../src/components/pages/homepage/homepageComponent';
import ShopPage from './components/shop/shop'
import SignInAndSignUp from '../src/components/pages/signin-and-signup/signin-and-signup'

import { auth } from './firebase/firebase.utils'


import './App.css';



class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  
  render(){
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
        </div>
      );
  }

}

export default App;
