import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
      <select>
        <option>1</option>
      </select>
      <button type="submit">submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BooksForm;
