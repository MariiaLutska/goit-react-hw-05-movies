import { useState, useEffect } from 'react';
import { fetchSearchFilms } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Input, ButtonSearch, Form } from './Movie-styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearchChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      return setTimeout(Notify.info('Please enter search data.'), 3000);
    } else {
      setSearchWord(inputValue);
      setSearchParams({ query: inputValue });
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
      fetchSearchFilms(searchWord)
        .then(movie => {
          setMoviesSearch(movie.results);
          setSearchWord('');
          setInputValue('');
          if (movie.results.length === 0) {
            Notify.info('We did not find any movies for this request.');
          }
        })
        .catch(error => console.log(error));
    }
  }, [searchWord]);

  return (
    <main>
      <Form onClick={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={inputValue}
          onChange={handleSearchChange}
        ></Input>
        <ButtonSearch type="submit">Search</ButtonSearch>
      </Form>
      <MovieList moviesAr={moviesSearch}></MovieList>
    </main>
  );
};

export default Movies;
