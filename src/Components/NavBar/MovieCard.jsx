export default function MovieCard({ movie }) {
  return (
    <>
      <div class="col s12 m6 l4">
        <div class="card hoverable" style={{ height: 600 }}>
          <div class="card-image">
            <img
              src={movie.posterPath}
              style={{ height: 500 }}
              alt={`${movie.title} movie poster`}
            />
          </div>
          <div class="card-content">
            <p class="flow-text">{movie.title}</p>
            <p>{movie.releaseDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
