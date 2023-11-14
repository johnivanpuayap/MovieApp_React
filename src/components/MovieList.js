import React from 'react'

const MovieList = (props) => {

    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className='image-container d-flex justify-content-start m-3' style={{ width: 'fit-content' }}>
                    <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
                    <div 
                        className='overlay d-flex align-items-center justify-content-center'
                        onClick={() => props.handleFavoritesClick(movie)}
                    >
                        <FavoriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;