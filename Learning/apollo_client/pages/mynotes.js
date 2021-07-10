/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Section: Web client with React
*/
import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    // Update the document title
    document.title = "My Note - Notedly";
  });

  return (
    <div>
      <h1>Notedly</h1>
      <p>These are my notes</p>
    </div>
  );
};
export default MyNotes;
