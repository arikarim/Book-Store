import React from 'react';
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

};

export default categoryFilter;
