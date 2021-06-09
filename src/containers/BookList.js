import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryFilter from '../components/categoryFilter';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';

const BookList = ({
  books, removeBook, filter, changeFilter,
}) => (
  <div>
    <div className="navbarr col-md-10 d-flex align-content-center">
      <span className="logo mx-3 py-3">Bookstore CMS</span>
      <span className="book mx-3 my-auto">Books</span>
      <div className="mx-3 my-auto">
        <CategoryFilter filter={filter} handleFilterChange={changeFilter} />
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemove={() => removeBook(book)} />
        ))}
      </tbody>

    </table>

  </div>
);

BookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const getFilteredBooks = ({ books, filter }) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(({ category }) => category === filter);
};

const mapStateToProps = (state) => ({
  books: getFilteredBooks(state),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    removeBook,
    changeFilter,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
