import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movie }) => {
  const location = useLocation();
  if (movie.length === 0) {
    return;
  } else {
    return (
      <ul className={s.list}>
        {movie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} state={{ from: location }}>
              <div className={s.item}>
                {movie.title ? movie.title : movie.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default MovieList;
