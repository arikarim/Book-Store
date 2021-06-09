import { BOOKCATES } from '../containers/ BooksForm';

const initialState = [
  { id: 1, title: 'Avengers', category: BOOKCATES[0] },
  { id: 2, title: 'Red Clif', category: BOOKCATES[2] },
  { id: 3, title: 'Gambol', category: BOOKCATES[4] },
  { id: 4, title: 'Walking Dead', category: BOOKCATES[3] },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
