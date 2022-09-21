import { Link, useLocation } from 'react-router-dom';
import { Item } from './MovieList-styled';

const MovieList = ({ moviesAr }) => {
  const location = useLocation();
  if (moviesAr.length === 0) {
    return;
  } else {
    return (
      <ul>
        {moviesAr.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </Item>
        ))}
      </ul>
    );
  }
};

export default MovieList;
