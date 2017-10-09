import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {Link} from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <div className='container'>
      <Main />
    </div>
    <div className='fixed-action-btn'>
      <Link
        className="btn-floating btn-large red"
        to="/meetups/add"
      >
        <i className='fa fa-plus' />
      </Link>
    </div>
  </div>
);

export default App;
