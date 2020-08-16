import React, { Component } from "react";
import Home from "../src/scenes/Home";
import Portfolio from "../src/scenes/Portfolio";
import { ApolloProvider } from "react-apollo";
import { client } from "../src/apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Header } from "../src/components/Header";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" render={() => <Redirect to="/portfolio" />} />
            {/* <Route path="/about" component={Home} /> */}
            <Route path="/portfolio" component={Portfolio} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
