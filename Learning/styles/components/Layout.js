/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 10/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Uses Styled Component
 * Section: Web client with React
 * Part: Shared component - layout our content.
 */
import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navigation from './Navigation';

///-----------------------------------------------------------///
///                     Component styles                     ///
///---------------------------------------------------------///
/**
 * div tag: wrapper class
 */
const Wrapper = styled.div`
  /*
    * We can apply media query styles within the styled comp
    * this will only apply the layout for screens above 700px wide
    */
  @media (min-width: 700px) {
    display: flex;
    top: 15px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;
/**
 * main tag
 */
const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

///-----------------------------------------------------------///
///                     Component function                   ///
///---------------------------------------------------------///
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
