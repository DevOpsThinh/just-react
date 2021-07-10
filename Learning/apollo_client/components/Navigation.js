/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Uses Styled Component
 * Section: Web client with React
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

///-----------------------------------------------------------///
///                     Component styles                     ///
///---------------------------------------------------------///
/**
 * nav tag
 */
const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (min-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% -64px);
    overflow-y: scroll;
  }
`;
/**
 * ul tag
 */
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  // Nest styles --> apply to within the NavList comp
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

///-----------------------------------------------------------///
///                     Component function                   ///
///---------------------------------------------------------///
const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">
            <span aria-hidden="true" role="img">
              🏠
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mynotes">
            <span aria-hidden="true" role="img">
              📓
            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <span aria-hidden="true" role="img">
              🌟
            </span>
            Favorites
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};
export default Navigation;
