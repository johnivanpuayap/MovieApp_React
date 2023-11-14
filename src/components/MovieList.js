import React from 'react'

const MovieList = (props) => {

  return (
    <div>
        {props.movies.map((movie, index) => 
            <img src={movie.Poster} alt={movie.Title}></img>
        )}
    </div>
  )
}

export default MovieList;