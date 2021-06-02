const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const initialState = [
  { id: 1, title: 'Book 1', category: categories[0] },
  { id: 2, title: 'Book 2', category: categories[2] },
  { id: 3, title: 'Book 3', category: categories[1] },
  { id: 4, title: 'Book 4', category: categories[4] },
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
