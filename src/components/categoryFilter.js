import React from 'react';
// import PropTypes from 'prop-types';
import { BOOKCATES } from '../containers/ BooksForm';

const categoryFilter = ({ filter, handleFilterChange }) => (
  <select
    value={filter}
    onChange={({ target: { value } }) => handleFilterChange(value)}
  >
    <option value="All">All</option>
    { BOOKCATES.map((c) => <option key={c} value={c}>{ c }</option>) }
  </select>
);

categoryFilter.propTypes = {

};

export default categoryFilter;
