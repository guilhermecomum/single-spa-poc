import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Profile 🚀</h2>
        <ul>
          <li>tweets</li>
          <li>followers</li>
          <li>following</li>
        </ul>
        <a
          className="waves-effect waves-light btn"
          onClick={() => window.dispatchEvent(new Event("followUser"))}
        >
          Follow!
        </a>
      </div>
    );
  }
}

export default App;
