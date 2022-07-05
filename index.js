import addBookUi from './modules/views/addBookUi.js';
import * as model from './modules/model.js';
import bookViews from './modules/views/bookViews.js';
import navigationView from './modules/views/navigationView.js';
import { DateTime } from './modules/luxon.js';

const addBook = () => {
  const [title, author] = addBookUi.getFormValues();
  if (!title || !author) return;
  model.addBook(title, author);
  bookViews.render(model.state.books);
};

const removeBook = (id) => {
  model.removeBook(id);
  bookViews.render(model.state.books);
};

const init = () => {
  model.loadBooks();
  bookViews.render(model.state.books);
  navigationView.navigate();
  navigationView.setYear(DateTime.now());
  addBookUi.addHandlerAdder(addBook);
  bookViews.removeHandlerRemover(removeBook);
};
init();