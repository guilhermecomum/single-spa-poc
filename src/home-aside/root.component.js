import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            <div id="profile" />
            <div id="trends" />
          </div>
          <div className="col s9">
            <div id="main" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
