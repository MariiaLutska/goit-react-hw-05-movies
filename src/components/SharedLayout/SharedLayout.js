import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Conteiner, Header } from './SharedLayout-styled';

const SharedLayout = () => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};

export default SharedLayout;
