export const state = {
  books: [],
};

const uploadBook = () => {
  localStorage.setItem('bookInfo', JSON.stringify(state.books));
};

export const loadBooks = () => {
  const data = JSON.parse(localStorage.getItem('bookInfo')) || []
  state.books = data;
};

export const addBook = (title, author) => {
  const book = { title, author, id: Date.now() }
  state.books.push(book);
  uploadBook();
};

export const removeBook = (id) => {
  const modified = state.books.filter((book) => book.id !== id);
  state.books = modified;
  uploadBook();
};