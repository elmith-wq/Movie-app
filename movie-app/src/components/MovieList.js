import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="shadow-lg p-4">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3 className="text-lg font-bold">{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
