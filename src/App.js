import React from 'react';

import Search from './Search';
import BookShelf from './BookShelf'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Search/>
        <BookShelf/>
      </div>
    )
  }
}

export default BooksApp
