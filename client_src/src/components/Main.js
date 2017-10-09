import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route component={Meetups} exact path='/'/>
      <Route component={About} exact path='/about'/>
    </Switch>
  </main>
);

export default Main;
