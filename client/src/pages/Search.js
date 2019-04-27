import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import SaveBtn from "../components/SaveBtn";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";
import { BookList, BookListItem } from "../components/List";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ''
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.bookSearch);
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();

    this.setState({books: []});
    let query = this.state.bookSearch.replace(' ', '+');

      API.queryBooks(query)
        .then(res => {
          this.setState({books: res.data.items});
          console.log(this.state.books);
        })
        .catch(err => console.log(err));
  };

  handleSave = index => {
    let book = this.state.books[index];
    console.log(book);
      API.saveBook({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors.toString(),
        description: book.volumeInfo.description,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        href: book.volumeInfo.infoLink,
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="primary"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-9 sm-10">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem key={this.state.books.indexOf(book)}>
                        <Container>
                          <Row>
                            <Col size="xs-4 sm-2">
                              <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
                            </Col>
                            <Col size="xs-5 sm-8">
                              <h3>{book.volumeInfo.title} by {book.volumeInfo.authors.toString()}</h3>
                              <p>Description: {book.volumeInfo.description}</p>
                              <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                                Check the book!
                              </a>
                              <SaveBtn onClick={() => this.handleSave(this.state.books.indexOf(book))} />
                            </Col>
                          </Row>
                        </Container>
                      </BookListItem>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
