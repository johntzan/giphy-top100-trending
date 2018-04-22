import React, { Component } from "react";
import { connect } from "react-redux";
import fetchGifs from "../actions/FetchGifs";

import { Container } from "semantic-ui-react";
import Loading from "./Loading";
import GifContainer from "./GifContainer/GifContainer";
import "./Home.css";

class Home extends Component {
  componentWillMount() {
    this.props.fetchGifs();
  }

  render() {
    let gifs = this.props.gifs;

    //split gifs of 100 in 4 arrays.
    let first = gifs.slice(0, 24);
    let second = gifs.slice(25, 50);
    let third = gifs.slice(51, 75);
    let fourth = gifs.slice(76, 100);

    if (this.props.fetchingGifs) {
      return <Loading />;
    } else if (this.props.fetchingGifsSuccess) {
      return (
        <Container fluid className="container-main">
          <div className="header">
            <h1 className="title">Giphy Trending Top 100</h1>
          </div>
          <div className="content">
            <GifContainer gifs={first} />

            <GifContainer gifs={second} />

            <GifContainer gifs={third} />

            <GifContainer gifs={fourth} />
          </div>
        </Container>
      );
    } else if (this.props.fetchingGifsFailed) {
      return (
        <Container fluid>
          <div className="header">
            <h1 className="title">An Error Occurred Loading Gifs..</h1>
          </div>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    fetchingGifs: state.fetchingGifs,
    fetchingGifsSuccess: state.fetchingGifsSuccess,
    fetchingGifsFailed: state.fetchingGifsFailed,
    gifs: state.gifs
  };
};

export default connect(mapStateToProps, { fetchGifs })(Home);
