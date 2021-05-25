import React, { Component } from 'react';
import axios from 'axios';
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      users: [],
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios
      .post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState({
      username: '',
    });
  }

  render() {
    return (
      <div>
        <div>Create New User</div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="userNameField">User Name</label>
            <input
              type="text"
              class="form-control"
              id="userNameField"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
