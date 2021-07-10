/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: Web client with React
*/
import React from 'react';
import ReactDOM from 'react-dom';

// Import global styles
import GlobalStyle from './components/GlobalStyle';
// Import Routes
import Pages from './pages';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
