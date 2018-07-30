import React, { Component} from 'react'
import { Link } from 'react-router-dom'

import Books from './Books';



class BookShelf extends Component {
  render (){
    //render the three shelves for BookShelf
    //checking props passed over succesfully
    console.log(this.props.bookList);

    //for clarity - variable contains the props which will be filtered through
    const booklist = this.props.bookList;

    //JSX code returns the code for the three bookshelves and contains the code to build the book list elements. 
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {booklist.filter(
                    //filter through for books with shelf prop currently reading - build book entry for them
                    book => book.shelf === 'currentlyReading').map(
                      book => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            organiseBooks={this.props.organiseBooks}
                            shelf = "currentlyReading"/>
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

                  {booklist.filter(
                    //filter + build for Want to Read
                    book => book.shelf === 'wantToRead').map(
                      book => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            organiseBooks={this.props.organiseBooks}
                            shelf = "wantToRead"
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

                  {booklist.filter(
                    //filter + build for Read
                    book => book.shelf === 'read').map(
                      book => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            organiseBooks={this.props.organiseBooks}
                            shelf = "read"
                            />
                        </li>
                      ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
          to='/search'>
          Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
