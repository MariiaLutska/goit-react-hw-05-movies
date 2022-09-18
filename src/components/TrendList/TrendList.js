import { useEffect, useState } from 'react';
import { fetchTrendFilm } from 'services/api';
import { Box } from '../Box';
import { Link } from 'react-router-dom';

export const TrendList = () => {
  const [trendFilm, setTrendFilm] = useState([]);

  useEffect(() => {
    fetchTrendFilm().then(data => {
      setTrendFilm([...data.results]);
    });
  }, []);

  return (
    <Box as="ul">
      {trendFilm.map(item => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <div>{item.title}</div>
        </Link>
      ))}
    </Box>
  );
};
