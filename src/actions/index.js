const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

let counter = 5;
export const addBook = (book) => {
  counter += 1;
  return {
    type: CREATE_BOOK,
    payload: {
      ...book,
      id: counter,
    },
  };
};

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: { id: book.id },
});

export const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  payload: newFilter,
});
