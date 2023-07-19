import { useState } from 'react';
import './MovieListPage.css';
import MovieCard from '../../Components/NavBar/MovieCard';

export default function MovieListPage({ movies }) {
  const movieItem = movies.map((m, idx) => (
    <MovieCard movie={m} key={idx} index={idx} />
  ));

  return <div className="row container">{movieItem}</div>;
}
