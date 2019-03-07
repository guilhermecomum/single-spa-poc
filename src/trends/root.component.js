import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: false
    };
    this.followUser = this.followUser.bind(this);
  }

  componentDidMount() {
    window.addEventListener("followUser", this.followUser);
  }

  componentWillUnmount() {
    window.removeEventListener("followUser", this.followUser);
  }

  followUser() {
    this.setState({ trends: !this.state.trends });
    console.log("State: ", this.props);
  }

  render() {
    return (
      <div>
        <h2>Trends 🚀</h2>
        <ul>
          <li>#HojeTem</li>
          <li>#MissaoPortugal</li>
          <li>#Ilegra</li>
        </ul>
        {this.state.trends && <h1>See more</h1>}
      </div>
    );
  }
}

export default App;
