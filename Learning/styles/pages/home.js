/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Refactoring: Remove <Header>, <Navigation> instances.
 * Section: Web client with React
 */
import React from 'react';

import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <p>This is the home page</p>
      <Button>Click me!</Button>
    </div>
  );
};

export default Home;
