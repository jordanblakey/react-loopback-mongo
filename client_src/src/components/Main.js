import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route component={Meetups} exact path='/' />
      <Route component={About} exact path='/about' />
      <Route component={AddMeetup} exact path='/meetups/add' />
      <Route component={MeetupDetails} exact path='/meetups/:id' />
    </Switch>
  </main>
);

export default Main;
