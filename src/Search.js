import React, { Component} from 'react';
import * as BooksAPI from './BooksAPI'
import Books from './Books';
import { Link } from 'react-router-dom';

class Search extends Component {

  state = {
    query: '',
    searchResult:[]
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.returnSearchResult(query)
  }

  returnSearchResult = (query) => {
    if (query){
      BooksAPI.search(query).then((searchResult) => {
        if (searchResult.error){
          this.setState({searchResult: []})
        }else{
          this.setState({ searchResult: searchResult })
        }
      })
    } else {
      this.setState({ searchResult: [] });
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
