// http://www.omdbapi.com/?i=tt3896198&apikey=7074a98e
import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./assets/search.svg";
import Movie from "./MovieCard";

const App = () => {
  const api_Url = "https://www.omdbapi.com/?i=tt3896198&apikey=7074a98e";
  const [movies, setMovies] = useState([]);
  const [search, setsearch] = useState("");
  const searchMovies = async (name) => {
    const response = await fetch(`${api_Url}&s=${name ? name : "superman"}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies);
  };

  useEffect(() => {
    searchMovies("");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          id="search"
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      <div className="container">
        {movies.length > 0
          ? movies.map((movie, index) => {
              return <Movie movie={movie} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};

export default App;
