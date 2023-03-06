import React, { Component } from "react";
import axios from "axios";
import Loading from '@ant-design/icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getUsers()
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  getUsers = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    return await axios.get("https://63e066a18b24964ae0fd6a6a.mockapi.io/users");
  };

  render() {
    const { loading, users } = this.state;
    if (loading) return <p>loading...<Loading /></p>;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;