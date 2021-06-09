import React from 'react';
import PropTypes from 'prop-types';
import { ImSpinner8 } from 'react-icons/im';

const Book = ({ book, handleRemove }) => (
  <div className="book-card col-12 d-flex justify-content-between align-content-center">
    <div>
      <span>{book.category}</span>
      <h2>{book.title}</h2>
      <div className="card-book d-flex">
        <span>Comments</span>
        <button onClick={() => handleRemove(book)} type="button">Remove</button>
        <span>Edit</span>
      </div>
    </div>
    <div className="progress my-auto">
      <div className="d-flex">
        <span className="">
          <ImSpinner8 />
        </span>
        <div className="d-flex flex-column my-auto">
          <span>%64</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
    <div className="chapter my-auto d-flex flex-column">
      <span>Current Chapter</span>
      <span>Chapter</span>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
