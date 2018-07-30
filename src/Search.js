import React, { Component} from 'react';
import * as BooksAPI from './BooksAPI'
import Books from './Books';
import { Link } from 'react-router-dom';

class Search extends Component {

  state = {
    //empty string ready to be updated with user input
    query: '',
    //empty array set to return searched books
    searchResult:[]
  }

  //state is updated to match input

  updateQuery = (query) => {
    this.setState({ query: query })
    this.returnSearchResult(query)
  }

  //return books that match the query or if there is no match empty string
  returnSearchResult = (query) => {
    //if input is in progress
    if (query){
      BooksAPI.search(query).then((searchResult) => {
        if (searchResult.error){
          //error empty the string
          this.setState({searchResult: []})
        }else{
          //else display the books
          this.setState({ searchResult: searchResult })
        }
      })
    //else a input is not in progress - display nothing
    } else {
      this.setState({ query: '', searchResult: [] });
    }
  }

  render () {
    return(
      <div className="search-books">

        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'>
            Close</Link>
          <div className="search-books-input-wrapper">
      
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>

        <div className="search-books-results">

          <ol className="books-grid">
            {this.state.searchResult.map(result => {

                let shelf = "none";

                this.props.books.map(book => (
                  book.id === result.id ?
                  shelf = book.shelf : ''
                ))
                return (
                  <li key={result.id}>
                    <Books
                      organiseBooks={this.props.organiseBooks}
                      book={result}
                      shelf = {shelf}
                      />
                  </li>
                )
              })
            }

          </ol>

        </div>
      </div>
    );
  }

}

export default Search;
