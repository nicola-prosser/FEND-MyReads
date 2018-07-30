//Thank you to Maeve NAP and Edoh for their study sessions, they have hugely helped my understanding .

//required react impoers
import React, {Component} from 'react';
import { Route } from 'react-router-dom'
//booksAPI providing the database
import * as BooksAPI from './BooksAPI'
//components
import Search from './Search';
import BookShelf from './BookShelf'
//style
import './App.css'

//app.js begins below

class BooksApp extends Component {

  state = {
    books: []
  }

  //once the component is loaded fetch the books and rerender
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  //function calls update on the books having taken in a new shelf on the selected books
  //it then recalls the books and sets the new state.
  organiseBooks = (book, shelf) => {

    BooksAPI.update(book, shelf)
    .then(BooksAPI.getAll)
    .then(books => this.setState({ books }));
  }

  //JSX renders the components and creates the route - updating the URL and allowing the back button to work.

  render() {

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelf bookList = {this.state.books} organiseBooks = {this.organiseBooks}
            />
        )} />

      <Route path="/search" render={() => (
          <Search
            organiseBooks = {this.organiseBooks} books={this.state.books}
            />
        )} />

      </div>
    )
  }
}



export default BooksApp
