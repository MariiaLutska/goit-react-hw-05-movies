import { useEffect, useState, Suspense } from 'react';
import { fetchFilmById } from 'services/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import s from './MovieDetail.module.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDet, setMovieDet] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (id === '') {
      return;
    } else {
      fetchFilmById(id)
        .then(movie => {
          setMovieDet(movie);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const { title, release_date, poster_path, genres, overview, vote_average } =
    movieDet;

  if (movieDet.length === 0) {
    return <p>We don't have any information for this movie.</p>;
  } else {
    return (
      <main className={s.container}>
        <Link className={s.btnBack} to={backLinkHref}>
          <span>&#129044;</span>Go Back
        </Link>

        <li className={s.item}>
          {movieDet && (
            <div className={s.wraper}>
              <img
                className={s.img}
                src={
                  poster_path !== undefined || poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg`
                }
                alt="Film img"
                height={450}
              />
              <div className={s.containerInfo}>
                <h2 className={s.title}>
                  {title} ({release_date.slice(0, 4)})
                </h2>
                <p>User Score: {vote_average}</p>

                <h3 className={s.title}>Overview</h3>
                <p className={s.text}>{overview}</p>
                <h4 className={s.title}>Genres</h4>
                <div>
                  {genres.map(genre => (
                    <div key={genre.name} className={s.genres}>
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>

        <p className={s.text}>Additional information</p>
        <ul className={s.list}>
          <Link className={s.link} to="credits">
            Cast
          </Link>
          <Link className={s.link} to={`/movie/${id}/reviews`}>
            Reviews
          </Link>
        </ul>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Outlet />
      </main>
    );
  }
};

export default MovieDetail;
