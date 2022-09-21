import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendFilm } from 'services/api';
import s from './Home.module.css';

// const TrendList = lazy(() => import('./TrendList/TrendList'));

const Home = () => {
  const [moviesTrand, setMoviesTrand] = useState([]);

  useEffect(() => {
    fetchTrendFilm()
      .then(movie => {
        setMoviesTrand(movie.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className={s.container}>
      <h1>Trending today</h1>
      <MovieList movie={moviesTrand} />
    </main>
  );
};

export default Home;
