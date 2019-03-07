import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Trends 🚀</h2>
        <ul>
          <li>#HojeTem</li>
          <li>#MissaoPortugal</li>
          <li>#Ilegra</li>
        </ul>
      </div>
    );
  }
}

export default App;
