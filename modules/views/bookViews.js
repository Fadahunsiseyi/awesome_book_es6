class BookView {
    parent = document.querySelector('.books-container');

    render(books) {
      this.parent.innerHTML = '';
      if (!books) return;
      books.forEach(((book) => {
        const builder = `
      <div class="book">
        <p class="book-info">"${book.title}" by ${book.author}</p>
        <button type="button" class="remove" data-bookid="${book.id}">Remove</button>
      </div>
      `;
        this.parent.insertAdjacentHTML('beforeend', builder);
      }));
    }
    removeHandlerRemover(handler) {
        
      this.parent.addEventListener('click', (e) =>
      {

        const btn = e.target.closest('.remove');
        if (!btn) return;
        const bookId = +btn.dataset.bookid;
        handler(bookId);
      });
    }
}
export default new BookView();