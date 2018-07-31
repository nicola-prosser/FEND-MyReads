import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    //empty string ready to be updated with user input
    query: "",
    //empty array set to return searched books
    searchResult: []
  };

  //state is updated to match input

  updateQuery = query => {
    this.setState({ query: query });
    //error handling
    if (!query) {
      this.setState({ query: "", searchResult: [] });
      return;
    }
    //if there is no match empty array, if not show results
    BooksAPI.search(query).then(searchResult => {
      this.setState({ searchResult: searchResult.error ? [] : searchResult });
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.map(result => {
              //map over the results --> book variable finds the first book and compares the ID to the result ID

              const book = this.props.books.find(book => book.id === result.id);
              //if book returns true then shelf = book.shelf if not shelf = none
              const shelf = book ? book.shelf : "none";

              return (
                <li key={result.id}>
                  <Books
                    organiseBooks={this.props.organiseBooks}
                    book={result}
                    shelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
