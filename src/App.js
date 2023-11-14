import React, { useState } from 'react'
import MovieList from './components/MovieList'

const App = () => {

  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "Rated": "PG",
      "Released": "25 May 1977",
      "Runtime": "121 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "George Lucas",
      "Writer": "George Lucas",
      "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
      "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 6 Oscars. 65 wins & 31 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.6/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "93%"
      },
      {
      "Source": "Metacritic",
      "Value": "90/100"
      }
      ],
      "Metascore": "90",
      "imdbRating": "8.6",
      "imdbVotes": "1,420,107",
      "imdbID": "tt0076759",
      "Type": "movie",
      "DVD": "10 Oct 2016",
      "BoxOffice": "$460,998,507",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Guardians of the Galaxy Vol. 2",
      "Year": "2017",
      "Rated": "PG-13",
      "Released": "05 May 2017",
      "Runtime": "136 min",
      "Genre": "Action, Adventure, Comedy",
      "Director": "James Gunn",
      "Writer": "James Gunn, Dan Abnett, Andy Lanning",
      "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
      "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
      },
      {
      "Source": "Metacritic",
      "Value": "67/100"
      }
      ],
      "Metascore": "67",
      "imdbRating": "7.6",
      "imdbVotes": "738,822",
      "imdbID": "tt3896198",
      "Type": "movie",
      "DVD": "10 Jul 2017",
      "BoxOffice": "$389,813,101",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Endgame",
      "Year": "2011",
      "Rated": "N/A",
      "Released": "14 Mar 2011",
      "Runtime": "60 min",
      "Genre": "Crime, Drama",
      "Director": "N/A",
      "Writer": "Avrum Jacobson",
      "Actors": "Shawn Doyle, Patrick Gallagher, Katharine Isabelle",
      "Plot": "The death of his fiancee has left chess master Arkady Balagan agoraphobic and unwilling to step outside of his hotel. This debilitation, however, doesn't stop him from solving difficult crimes.",
      "Language": "English",
      "Country": "Canada",
      "Awards": "1 win & 5 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NzUwNjk5MF5BMl5BanBnXkFtZTcwOTk3NDM4NA@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.5/10"
      }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.5",
      "imdbVotes": "3,723",
      "imdbID": "tt1797629",
      "Type": "series",
      "totalSeasons": "1",
      "Response": "True"
    }
  ])

  return (
    <div>
      <MovieList movies = {movies} />
    </div>
  )
}

export default App