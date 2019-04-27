import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/List";
import Thumbnail from "../components/Thumbnail";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
    <div>
      <Jumbotron/>
          <Container>
            <Row>
              <Col size="md-12">
                <Row>
                  <Col size="xs-9 sm-10">
                      <BookList>
                        <BookListItem key={this.state.book._id}>
                          <Container>
                            <Row>
                              <Col size="xs-4 sm-2">
                                <Thumbnail src={this.state.book.thumbnail} />
                              </Col>
                              <Col size="xs-8 sm-10">
                                <h3>{this.state.book.title} by {this.state.book.author}</h3>
                                <p>Description: {this.state.book.description}</p>
                                <a rel="noreferrer noopener" target="_blank" href={this.state.book.href}>
                                  Check the book!
                                </a>
                              </Col>
                            </Row>
                          </Container>
                        </BookListItem>
                      </BookList>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col size="md-2">
                <Link to="/books">← Back to Saved Books</Link>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Detail;
