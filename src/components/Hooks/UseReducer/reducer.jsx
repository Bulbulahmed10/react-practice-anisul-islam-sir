export const reducer = (state, action) => {

  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModelOpen: true,
      modelText: "Book is added",
    };
  }
  
  if (action.type === "REMOVE") {
    const filteredBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );

    return {
      ...state,
      books: filteredBooks,
      isModelOpen: true,
      modelText: "Book is removed",
    };
  }
  return state;
};
