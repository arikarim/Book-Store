import React from 'react';
// import PropTypes from 'prop-types';
import { BOOKCATES } from '../containers/ BooksForm';

const categoryFilter = ({ filter }) => (
  <select
    value={filter}
  >
    <option value="All">All</option>
    { BOOKCATES.map((c) => <option key={c} value={c}>{ c }</option>) }
  </select>
);

categoryFilter.propTypes = {

};

export default categoryFilter;
