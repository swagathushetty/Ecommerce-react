import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from '../src/components/header/header'
import HomePage from '../src/components/pages/homepage/homepageComponent';
import ShopPage from './components/shop/shop'
import SignInAndSignUp from '../src/components/pages/signin-and-signup/signin-and-signup'
import CheckoutPage from '../src/components/pages/checkout/checkout'

// import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'


import './App.css';



const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ?
              (<Redirect to='/' />)
              :
              (<SignInAndSignUp />)
          }
        />
      </Switch>
    </div>
  );
}



//getting state.user.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  }
}



//null as we dont need the state
export default connect(mapStateToProps, mapDispatchToProps)(App);
