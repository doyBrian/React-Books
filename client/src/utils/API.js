import axios from "axios";

export default {
  //query books
  queryBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+" + query + "&key=AIzaSyAxO3FqxOaQWKENuaw014EXtKS4s8r-_AI");
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
