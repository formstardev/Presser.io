import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Components
import Landing from '../views/landing';
import Splash from '../views/Auth/splash';
import Register from '../views/Auth/register';
import Veryfication from '../views/Auth/verification';
import Login from '../views/Auth/login'
import Confirmation from '../views/Auth/confirmation'
import Onboarding from '../views/onboarding';
import RegisterBasic from '../views/Auth/register-basic';
import Home from '../views/Home';
import Message from '../views/Message';
import Group from '../views/Group';
import GroupChat from '../views/Group/groupChat';



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
        <Route path="/onboarding" component = { Onboarding } exact/>
        <Route path="/register-basic" component = { RegisterBasic } exact/>                
        <Route path="/home" component = { Home } exact/>                
        <Route path="/message" component = { Message } exact/>                
        <Route path="/group" component = { Group } exact/>                
        <Route path="/group/groupchat" component = { GroupChat } exact/>                
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;