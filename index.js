
import bookAddView from './modules/views/bookAddView.js'
import * as model from './modules/model.js'
import bookViews from './modules/views/bookViews.js';

const addBook = () => {
    const [title, author] = bookAddView.getFormValues()
    if(!title || !author) return;
    model.addBook(title, author)
    bookViews.render(model.state.books)
}

const removeBook = (id) => {
    model.removeBook(id)
    bookViews.render(model.state.books)
}

const init = () => {
    model.loadBooks()   
    bookViews.render(model.state.books)
    bookAddView.addHandlerAdder(addBook)
    bookViews.removeHandlerRemover(removeBook)
}
init()