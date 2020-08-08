import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../src/components/pages/homepage/homepageComponent';
import ShopPage from './components/shop/shop'

import './App.css';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
