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
import Profile from '../views/Profile';
import Layout from '../views/Layout';
import HomeComponent from '../component/home/homeComponent';
import MessageList from '../component/message/messageList';
import GroupList from '../component/group/groupList';
import GroupChatComponent from '../component/group/groupChatComponent';
import SettingComponent from '../component/setting/settingContainer';
import  Dashboard  from '../component/admin';
import DashboardLayout from '../component/admin/layout';



const Routes = () => {
  const isAdmin =false;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Splash } exact />
        <Route path="/dashboard" component={ Dashboard } exact />
        <Route path="/landing" component = { Landing } exact />
        <Route path="/register" component = { Register } exact />
        <Route path="/verification" component = { Veryfication } exact/>
        <Route path="/login" component = { Login } exact/>
        <Route path="/confirmation" component = { Confirmation } exact/>        
        <Route path="/onboarding" component = { Onboarding } exact/>
        <Route path="/register-basic" component = { RegisterBasic } exact/>
        <Route path="/profile" component = { Profile } exact/>
       {isAdmin ?
        <DashboardLayout>
          <Route path="/dashboard/home" component = {HomeComponent} exact/>  
          <Route path="/dashboard/message" component = { MessageList } exact/>  
          <Route path="/dashboard/group" component = {GroupList} exact/>  
          <Route path="/group/groupchat" component = {GroupChatComponent} exact/>  
          <Route path="/dashboard/Setting" component = {SettingComponent} exact/>  
        </DashboardLayout>                
        :
        <Layout>                
          <Route path="/home" component = { HomeComponent } exact/>                
          <Route path="/message" component = { MessageList } exact/>                
          <Route path="/group" component = { GroupList } exact/>                
          <Route path="/group/groupchat" component = { GroupChatComponent } exact/>
          <Route path="/setting" component = { SettingComponent }></Route>
        </Layout> 
        }                       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;