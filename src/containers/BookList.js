// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = () => (
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
        <tr>
          <td>ok</td>
          <td>ok</td>
          <td>ok</td>
        </tr>
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
