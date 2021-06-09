import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <div className="book-card col-12">
    <span>{book.category}</span>
    <h2>{book.title}</h2>
    <div className="card-book d-flex">
      <span>Comments</span>
      <button onClick={() => handleRemove(book)} type="button">Remove</button>
      <span>Edit</span>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
