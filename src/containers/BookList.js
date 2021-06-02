import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Book from '../components/Book';
// import Book from '../components/Book';

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
        {/* {books.forEach((book) => <Book id={book.id} book={book} />)} */}
      </tbody>

    </table>

  </div>
);

BookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeBook: books.removeBook,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
