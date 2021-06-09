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
    if (formData.title && formData.category) {
      addBook(formData);
      setFormData({ title: '', category: '' });
      e.target.reset();
    }
  };

  return (
    <div className="container my-5">
      <h3 className="form-title mx-2 my-3">ADD NEW BOOK</h3>
      <form className="container d-flex justify-content-between" onSubmit={handleSubmit}>
        <input
          className="form-control"
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <select
          className="col-3 mx-3 cate-select"
          id="category"
          name="category"
          onChange={handleChange}
          value={formData.category}
          required
        >
          <option>Category</option>
          {BOOKCATES.map((cate) => <option key={cate.index}>{cate}</option>)}
        </select>
        <button className="form-btn btn btn-primary col-2" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addBook,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(BooksForm);
