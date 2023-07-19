import { useState } from 'react';
import './MovieDetailPage.css';
import { useParams } from 'react-router-dom';

import CastItem from '../../Components/NavBar/CastItem';

export default function MovieDetailPage({ movies }) {
  // const cast = movieName.map((c, idx) => (
  //   <CastItem cast={c} key={idx} index={idx} />
  // ));
  const { movieName } = useParams();
  // const currentMovie = movies.filter((movie) => movie.title === movieName).map((movie, idx) => ;

  return (
    <div>
      {movies
        .filter((movie) => movie.title === movieName)
        .map((movie, idx) => (
          <div key={idx}>
            <h1>{movie.title}</h1>
            <p>Released: {movie.releaseDate}</p>
            <p>
              <strong>Cast:</strong> {movie.cast.join(', ')}
            </p>
            <img src={movie.posterPath} alt={`${movie.title} poster`} />
          </div>
        ))}
    </div>
  );
}

{
  /* <h1>Title: {currentMovie.title}</h1>
<p>Release Date: {currentMovie.releaseDate}</p>
<img src={currentMovie.posterPath} alt={`${currentMovie.title} poster`} /> */
}
{
  /* <ul>{cast}</ul> */
}
