/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Add an note router
 * Section: Web client with React
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import shared layout component
import Layout from '../components/Layout';

// Import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Note from './note';

// Define routes
const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
        <Route paht="/note/:id" component={Note} />
      </Layout>
    </Router>
  );
};
export default Pages;
