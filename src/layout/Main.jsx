import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import classNames from "classnames";
const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  // componentDidMount() {
  //   fetch("http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ movies: data.Search }));
  // }

  const searchMovies = () => {
    setLoading(true);
    fetch(
      //& - bonding get parameters
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}&type=${
        type === "all" ? "" : type
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setPageCount(data.totalResults ? Math.ceil(data.totalResults / 10) : 0);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const updateQuery = (query) => {
    setPage(1);
    setQuery(query);
  };

  useEffect(() => {
    if (query) {
      searchMovies();
    }
  }, [page, type]);
  return (
    <main className="container content">
      <div>Pages {pageCount}</div>
      {pageCount &&
        Array(pageCount)
          .fill(0)
          .map((_, i) => (
            <span
              className={classNames(i + 1 === page ? "page" : "", "pagination")}
              key={i}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {i + 1}
            </span>
          ))}
      <Search
        setQuery={updateQuery}
        setType={setType}
        searchMovies={searchMovies}
      />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
