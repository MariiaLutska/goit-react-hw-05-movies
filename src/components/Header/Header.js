import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './Header.module.css';
// import styled from 'styled-components';

const Header = () => {
  return (
    <container className={s.container}>
      <header className={s.header}>
        <nav>
          <Link className={s.link} to="/">
            Home
          </Link>
          <Link className={s.link} to="/movie">
            Movie
          </Link>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </container>
  );
};

export default Header;
