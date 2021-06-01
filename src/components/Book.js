import React from 'react';
// import PropTypes from 'prop-types'
const Book = ({ book }) => (
  <tr>
    <td id={book.id}>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {

};

export default Book;
