/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: Web client with React
*/
import React from 'react';
import ReactDOM from 'react-dom';

// Import Routes
import Pages from './pages';

const App = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
