import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
      <h1>React Books</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/">
        Powered by Google Books
      </a>
    </div>
  );
}

export default Jumbotron;
