import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../Box';

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.muted};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Header = () => {
  return (
    <>
      <Box as="header" p={4} height="100vh" borderBottom="1px solid black">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movie">Movie</NavItem>
      </Box>
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
};
