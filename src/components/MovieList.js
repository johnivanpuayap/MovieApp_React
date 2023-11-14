import React from 'react'

const MovieList = ({movies}) => {

  return (
    <>
        {movies.map((movie, index) => (
            <div key={index} className='d-flex justify-content-start m-3' style={{ width: 'fit-content' }}>
                <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
            </div>
        ))}
    </>
  )
}

export default MovieList;