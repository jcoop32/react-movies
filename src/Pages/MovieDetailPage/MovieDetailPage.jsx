import './MovieDetailPage.css';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
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
