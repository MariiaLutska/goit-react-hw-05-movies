import { useEffect, useState } from 'react';
import { fetchFilmById } from 'services/api';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Box } from '../Box';

export const TrendItem = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate(id);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchFilmById(id).then(data => {
      setFilm(data);
    });
  }, [id]);

  const handleGoBack = () => navigate(-1);

  return (
    <>
      <button onClick={handleGoBack} type="button">
        Go Back
      </button>

      <Box as="li">
        {film && (
          <div>
            <img
              src={`${IMG_URL}${film.poster_path}`}
              alt="Film img"
              height={450}
            />
            <h2>
              {film.original_title}({film.release_date.slice(0, 4)})
            </h2>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <div>
              {film.genres.map(genres => (
                <div key={genres.name}>{genres.name}</div>
              ))}
            </div>
          </div>
        )}
      </Box>

      <p>Additional information</p>
      <Box as="ul">
        <Link to="credits">Cast</Link>
        <Link to={`/movie/${id}/reviews`}>Reviews</Link>
      </Box>

      <Routes>
        <Route path="credits" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
