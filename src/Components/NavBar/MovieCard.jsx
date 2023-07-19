import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="col s12 m6 l4">
        <div className="card hoverable" style={{ height: 600 }}>
          <div className="card-image">
            <img
              src={movie.posterPath}
              style={{ height: 500 }}
              alt={`${movie.title} movie poster`}
              draggable={false}
            />
          </div>
          <div className="card-content black-text">
            <p>{movie.title}</p>
            <p>Release Date: {movie.releaseDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
