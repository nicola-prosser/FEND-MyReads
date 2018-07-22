import React from 'react';

import Search from './Search';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []

  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  organiseBooks = (book, shelf) => {
    update(book, shelf);

  }

  render() {
    return (
      <div className="app">
        <Search/>
        <BookShelf bookList={this.state.books}
          organiseBooks={this.organiseBooks}
          />
      </div>
    )
  }
}

export default BooksApp
