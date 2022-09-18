import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/api';
import { Box } from '../Box';

export const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchCredits(id).then(data => {
      setActors(data.cast);
    });
  }, [id]);

  return (
    <>
      <div>
        {actors &&
          actors.map(actor => (
            <Box as="li" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${IMG_URL}${actor.profile_path}`
                    : 'https://via.placeholder.com/150x225/808080/ff4e00/?text=GoIT.React'
                }
                alt="actor"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </Box>
          ))}
      </div>
    </>
  );
};
