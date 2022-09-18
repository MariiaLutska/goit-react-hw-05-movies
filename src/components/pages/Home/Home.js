import { TrendList } from 'components/TrendList/TrendList';
import { Section } from '../../Section/section.jsx';
import { Box } from '../../Box';

export const Home = () => {
  return (
    <>
      <Box>
        <Section title="Trending today"></Section>
        <TrendList />
      </Box>
    </>
  );
};
