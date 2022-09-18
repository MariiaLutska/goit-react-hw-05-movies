import { Box } from '../../Box';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const Movie = () => {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" p={4} borderRight="1px solid black">
        <Box as="nav" display="flex" flexDirection="column">
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
