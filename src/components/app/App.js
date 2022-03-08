import React, { useState, useEffect } from "react";
// import Main from "../main/Main";
import MovieList from "../movieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "../movieListHeading/MovieListHeading";
import SearchBox from "../searchBox/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e4db3ced`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid col-lg-6 mt-4">
      <div style={{textAlign:'center'}} className="">
        <MovieListHeading heading="Filmai.in" />
        <div style={{width:'300%'}}>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
