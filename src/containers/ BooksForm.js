import React from 'react';
// import PropTypes from 'prop-types';
const BOOKCATES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

const BooksForm = (props) => (
  <form>
    <label>Title</label>
    <input />
    <select>
      <option>1</option>
    </select>
    <button type="submit">submit</button>
  </form>
);

BooksForm.propTypes = {

};

export default BooksForm;
