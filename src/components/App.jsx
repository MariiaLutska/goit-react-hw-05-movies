import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Movie } from './pages/Movie/Movie';
import {TrendItem} from './TrendItem/TrendItem';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="/movie/:id/*" element={<TrendItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position='top' reverseOrder={false} />
    </>
  );
};

