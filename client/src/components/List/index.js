import React from "react";
import "./style.css";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


