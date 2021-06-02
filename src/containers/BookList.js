import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Book from '../components/Book';
// import Book from '../components/Book';

const BookList = ({ books }) => (
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
        {console.log(books)}
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>

    </table>

  </div>
);

BookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({
//     removeBook,
//   }, dispatch)
// );

export default connect(mapStateToProps)(BookList);
