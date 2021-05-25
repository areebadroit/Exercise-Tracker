import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/').then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location = '/';
  }
  render() {
    return (
      <div>
        <div>Create New Exercise Log</div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="userNameField">User Name</label>
            <select
              className="form-control"
              ref="userInput"
              id="userNameField"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="form-group">
            <label for="descriptionField">Description</label>
            <input
              type="text"
              class="form-control"
              id="descriptionField"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div class="form-group">
            <label for="durationField">Duration(in minutes)</label>
            <input
              type="text"
              class="form-control"
              id="durationField"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div class="form-group">
            <label for="dateField">Date</label>
            <DatePicker selected={this.state.date} onChange={this.state.date} />
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateExercise;
