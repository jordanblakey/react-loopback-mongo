import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {

  shouldComponentUpdate(){
    return false;
  }

  addMeetup(newMeetup){
    // console.log(newMeetup);
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/meetups',
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className='input-field'>
            <input name='name' ref='name' type='text'/>
            <label htmlFor='name'>Name</label>
          </div>
          <div className='input-field'>
            <input name='city' ref='city' type='text'/>
            <label htmlFor='city'>City</label>
          </div>
          <div className='input-field'>
            <input name='address' ref='address' type='text'/>
            <label htmlFor='adress'>Address</label>
          </div>
          <input className='btn' type='submit' value='Save' />
        </form>
      </div>
    )
  }
}

export default AddMeetup;