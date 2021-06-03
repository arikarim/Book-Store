import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../actions';

export const BOOKCATES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ addBook }) => {
  const [formData, setFormData] = useState({ title: '', category: '' });

  const handleChange = (e) => {
    setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(formData);
    setFormData({ title: '', category: '' });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={formData.category}
        required
      >
        {BOOKCATES.map((cate) => <option key={cate.index}>{cate}</option>)}
      </select>
      <button type="submit">submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};
/*eslint-disable */
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addBook: addBook,
  }, dispatch)
);
/* eslint-enable */
export default connect(null, mapDispatchToProps)(BooksForm);
