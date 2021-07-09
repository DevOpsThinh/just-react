/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: Web client with React
 */
 import React from 'react';

 import Header from '../components/Header';
 import Navigation from '../components/Navigation';
 
 const Home = () => {
   return (
     <div>
       <Header />
       <Navigation />
       <p>This is the home page</p>
     </div>
   );
 };
 
 export default Home;
 