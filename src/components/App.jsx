import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './Header/Header';

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetail = lazy(()=> import('../pages/MovieDetail/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export function App() {
  return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="/movie/:id/*" element={<MovieDetail />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
}