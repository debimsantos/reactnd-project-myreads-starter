import React from 'react';
import Book from './Book.js';
import './index.css'


class MainPage extends React.Component {
    render() {
        return(
          console.log(this.props.books),
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.props.books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                        <li key={book.id}>
                            <Book
                              book={book}
                              changeShelf={this.props.changeShelf}
                              currentShelf="currentlyReading"
                            />
                        </li>
                      ))
                    }
                  </ol>
                </div>
              </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { this.props.books
                        .filter(book => book.shelf === 'wantToRead')
                        .map(book =>(
                          <li key={book.id}>
                            <Book
                              book={book}
                              changeShelf={this.props.changeShelf}
                              currentShelf="wantToRead"
                            />
                          </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { this.props.books
                        .filter(book => book.shelf === 'read')
                        .map(book =>(
                          <li key={book.id}>
                            <Book
                              book={book}
                              changeShelf={this.props.changeShelf}
                              currentShelf="read"
                            />
                          </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>

            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>

          </div>
        );
    }
}

export default MainPage;