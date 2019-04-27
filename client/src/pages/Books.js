import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";



class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => 
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <Row>
                <Col size="xs-9 sm-10">
                  {this.state.books.length ? (
                    <BookList>
                      {this.state.books.map(book => (
                        <BookListItem key={book._id}>
                          <Link to={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
                            </strong>
                          </Link>
                          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        </BookListItem>
                      ))}
                    </BookList>
                    ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
