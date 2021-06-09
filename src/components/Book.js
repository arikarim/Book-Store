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
    <div className="progress my-auto gap-3 justify-content-between  d-flex">
      <span className="p1">
        <ImSpinner8 />
      </span>
      <div className="p2 d-flex flex-column my-auto">
        <h3>%64</h3>
        <span>Completed</span>
      </div>
    </div>
    <div className="chapter my-auto d-flex flex-column">
      <span>CURRENT CHAPTER</span>
      <p>Chapter 99</p>
      <button className="btn btn-primary" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
