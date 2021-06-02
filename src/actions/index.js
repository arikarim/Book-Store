const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

let counter = 10;
export const addBook = (book) => {
  counter += 1;
  return {
    type: CREATE_BOOK,
    payload: {
      ...book,
      id: counter,
    }
  }
};

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: { id: book.id },
});
