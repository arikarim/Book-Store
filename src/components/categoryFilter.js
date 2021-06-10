import React from 'react';
import PropTypes from 'prop-types';
import { BOOKCATES } from '../containers/ BooksForm';

const categoryFilter = ({ filter, handleFilterChange }) => (
  <select
    className="cates"
    value={filter}
    onChange={({ target: { value } }) => handleFilterChange(value)}
  >
    <option value="All">CATEGORIES</option>
    { BOOKCATES.map((c) => <option key={c} value={c}>{ c }</option>) }
  </select>
);

categoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default categoryFilter;
