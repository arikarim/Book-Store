import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button onClick={() => handleRemove(book)} type="button">X</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
