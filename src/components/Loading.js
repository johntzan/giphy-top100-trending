import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Loading extends Component {
  render() {
    return (
      <Container fluid>
        <div className="header">
          <h1 className="title">Loading..</h1>
        </div>
      </Container>
    );
  }
}

export default Loading;
