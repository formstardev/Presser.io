import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Components
import Landing from '../views/landing';
import Splash from '../views/Auth/splash';
import Register from '../views/Auth/register';
import Veryfication from '../views/Auth/verification';
import Login from '../views/Auth/login'
import Confirmation from '../views/Auth/confirmation'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Splash } exact />
        <Route path="/landing" component = { Landing } exact />
        <Route path="/register" component = { Register } exact />
        <Route path="/verification" component = { Veryfication } exact/>
        <Route path="/login" component = { Login } exact/>
        <Route path="/confirmation" component = { Confirmation } exact/>        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;