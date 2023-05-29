import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Components
import Landing from '../views/landing';
import Splash from '../views/Auth/splash';
import Register from '../views/Auth/register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Landing } exact />
        <Route path="/splash" component={ Splash } exact />    
        <Route path="/register" component={ Register } exact />    


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;