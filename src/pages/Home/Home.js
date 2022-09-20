import { Suspense } from 'react';
import TrendList from 'components/TrendList/TrendList';

// const TrendList = lazy(() => import('./TrendList/TrendList'));

const Home = () => {
  return (
    <>
      <Suspense>
        <h1>Trending today</h1>

        <TrendList />
      </Suspense>
    </>
  );
};

export default Home;
