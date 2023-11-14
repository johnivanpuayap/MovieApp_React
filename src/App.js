import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=39add0ae`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));
    if (movieFavorites){
      setFavorites(movieFavorites);
    } else {
      setFavorites([]);
    }
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const AddFavoriteMovie = (movie) => {
    if (favorites.includes(movie)){
      return;
    } else {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  }

  const RemoveFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter((favorites) => favorites.imdbID !== movie.imdbID);

    setFavorites(newFavoriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = 'Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
          movies = {movies} 
          handleFavoritesClick={AddFavoriteMovie} 
          favoriteComponent = {AddFavorites}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = 'Favorites' />
      </div>
      <div className="row">
        <MovieList 
          movies = {favorites} 
          handleFavoritesClick={RemoveFavoriteMovie} 
          favoriteComponent = {RemoveFavorites}
        />
      </div>
    </div>
  )
}

export default App