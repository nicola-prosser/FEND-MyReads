//Thank you to Maeve NAP for her study sessions and mentoring on Slack.

import React from 'react';
import { Route } from 'react-router-dom'

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
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
    this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelf bookList = {this.state.books}
            organiseBooks = {this.organiseBooks}
            />
        )} />

      <Route path="/search" render={() => (
          <Search
            organiseBooks = {this.organiseBooks}
            books={this.state.books}
            />
        )} />

      </div>
    )
  }
}



export default BooksApp
