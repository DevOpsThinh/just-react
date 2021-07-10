/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Uses Styled Component
 * Section: Web client with React
 */
import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

///-----------------------------------------------------------///
///                     Component styles                     ///
///---------------------------------------------------------///
/**
 * header tag
 */
const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
/**
 * h1: logo text
 */
const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

///-----------------------------------------------------------///
///                     Component function                   ///
///---------------------------------------------------------///
const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </HeaderBar>
  );
};
export default Header;
