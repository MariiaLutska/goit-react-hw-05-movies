const KEY_API = '92bf3c4c89b3bb17378a4346493c3c36';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularFilms() {
  const url = `${BASE_URL}/trending/all/day?api_key=${KEY_API}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchSearchFilms(searchWord) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${searchWord}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchDetailFilm(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchCasts(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

export async function fetchReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}
