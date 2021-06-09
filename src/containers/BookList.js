import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BsFillPersonFill } from 'react-icons/bs';
import CategoryFilter from '../components/categoryFilter';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';

const BookList = ({
  books, removeBook, filter, changeFilter,
}) => (
  <div className="">
    <div className="navbarr">
      <div className="container d-flex justify-content-between">
        <div className=" d-flex align-content-center">
          <span className="logo py-3">Bookstore CMS</span>
          <span className="book mx-3 my-auto">BOOKS</span>
          <div className="cates mx-3 my-auto">
            <CategoryFilter filter={filter} handleFilterChange={changeFilter} />
          </div>
        </div>
        <div className="self-icon my-auto">
          <BsFillPersonFill />
        </div>
      </div>
    </div>
    <div className="container">
      {books.map((book) => (
        <Book key={book.id} book={book} handleRemove={() => removeBook(book)} />
      ))}
    </div>
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
