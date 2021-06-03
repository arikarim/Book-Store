import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ books, removeBook }) => (
  <div>
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
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    removeBook,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
