import { useState, useEffect } from 'react';
import { fetchFilmByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { Notify } from 'notiflix';
import s from './Movie.module.css';

const Movie = () => {
  const [value, setValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleInputChagne = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value === '') {
      return setTimeout(Notify.info('Please enter search data.'), 3000);
    } else {
      setSearchWord(value);
      setSearchParams({ query: value });
    }
  };

  useEffect(() => {
    if (query) {
      setSearchWord(query);
    }
  }, [query]);

  useEffect(() => {
    if (searchWord === '') {
      return;
    } else {
      fetchFilmByQuery(searchWord)
        .then(movie => {
          setMovieSearch(movie.results);
          setSearchWord('');
          setValue('');
          if (movie.results.lenght === 0) {
            Notify.info('We did not find any movies for this request.');
          }
        })
        .catch(error => console.log(error));
    }
  }, [searchWord]);

  return (
    <main className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={handleInputChagne}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      <MovieList movie={movieSearch}></MovieList>
    </main>
  );
};
export default Movie;
