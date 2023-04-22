import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  // componentDidMount() {
  //   fetch("http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ movies: data.Search }));
  // }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      //& - bonding get parameters
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
      </main>
    );
  }
}

export default Main;
