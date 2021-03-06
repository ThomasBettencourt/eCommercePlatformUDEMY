import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
   
   <div className="App">   
    <Header />   
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop'component={ShopPage} />        
      </Switch>
    </div>
  );
}

export default App;
