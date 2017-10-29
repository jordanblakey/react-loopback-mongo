import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      city: "",
      address: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getMeetupDetails();
  }

  shouldComponentUpdate() {
    return true;
  }

  getMeetupDetails() {
    let meetupId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
            city: response.data.city,
            address: response.data.address
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  editMeetup(newMeetup){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/meetups/${this.state.id}`,
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.editMeetup(newMeetup);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input name="name" onChange={this.handleInputChange} ref="name" type="text" value={this.state.name} />
            <label className="active" htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input name="city" onChange={this.handleInputChange} ref="city" type="text" value={this.state.city} />
            <label className="active" htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input name="address" onChange={this.handleInputChange} ref="address" type="text" value={this.state.address} />
            <label className="active" htmlFor="adress">Address</label>
          </div>
          <input className="btn" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default EditMeetup;
