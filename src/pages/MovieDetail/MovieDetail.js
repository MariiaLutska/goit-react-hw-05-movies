import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchDetailFilm } from '../../services/api';
import {
  Conteiner,
  Img,
  ConteinerInfo,
  Score,
  List,
  LinkBack,
} from './MovieDetail-styled';

const MovieDetail = () => {
  const [movieDet, setMovieDet] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      fetchDetailFilm(movieId)
        .then(movie => {
          setMovieDet(movie);
        })
        .catch(error => console.log(error));
    }
  }, [movieId]);

  const { title, name, poster_path, genres, overview, vote_average } = movieDet;

  if (movieDet.length === 0) {
    return <p>We don't have any information for this movie.</p>;
  } else {
    return (
      <main>
        <LinkBack to={backLinkHref}>
          <span>&#129044;</span>Go back
        </LinkBack>
        <Conteiner>
          <Img
            src={
              poster_path !== undefined || poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg`
            }
            alt=""
          />
          <ConteinerInfo>
            <h1>{title ? title : name}</h1>
            <p>
              User Score:<Score>{vote_average}</Score>
            </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genre</h2>
            <p>
              {genres
                ? genres.map(genre => {
                    return genre.name + ' ';
                  })
                : ' '}
            </p>
          </ConteinerInfo>
        </Conteiner>
        <h2>Additional information</h2>
        <List>
          <li>
            <Link to="cast" state={{ from: location?.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </Link>
          </li>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
};

export default MovieDetail;
