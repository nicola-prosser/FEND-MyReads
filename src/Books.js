import React, { Component} from 'react';

class Books extends Component {

  render(){

    const publication = this.props.book;

    // variable contains the cover image property and the action to take if no image link is available to avoid an error.
    let bookCover = publication.imageLinks ? publication.imageLinks.thumbnail: "";

    //JSX code returns the divs to build the books and the selectors to change the shelves.
    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${bookCover}')`}}>
          </div>

          <div className="book-shelf-changer">

            <select
              value = {this.props.shelf}
              value-default = {this.props.currentShelf}
              onChange = {(evt) => this.props.organiseBooks(publication, evt.target.value)}>

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>

            </select>
          </div>
        </div>
        <div className="book-title">{publication.title}</div>
        <div className="book-authors">{publication.authors}</div>
      </div>
    );
  }

}

export default Books;
