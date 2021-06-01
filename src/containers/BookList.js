// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        {books.map((book) => <Book book={book} />)}
      </tbody>

    </table>

  </div>
);

BookList.propTypes = {

};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
