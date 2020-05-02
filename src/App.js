import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth} from './firebase/firebase.util';
// const HatsPage=()=>(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }
  
  unsunscribeFromAuth=null;

  componentDidMount(){
    this.unsunscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
      
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsunscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
    );
  }
}

export default App; 
