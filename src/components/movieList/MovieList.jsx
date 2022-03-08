import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
            <div style={{height:'430px', width:'300px'}} className='col align-self-center mt-4 mb-4'>
                <img src={movie.Poster} alt="NoImage"></img>
            </div>
            ))}
        </>
    );
};

export default MovieList;
