import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Header.module.css';
// import styled from 'styled-components';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/movie">
          Movie
        </NavLink>
      </header>

      <main className={s.container}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
