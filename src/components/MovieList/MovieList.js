import { Link } from 'react-router-dom';
import { Box } from '../Box';

export const MovieList = ({ movie }) => {
  return (
    <Box as="ul">
      {movie &&
        movie.map(item => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <div>{item.title}</div>
          </Link>
        ))}
    </Box>
  );
};
