class AddBookUi {
    title = document.querySelector('.title');

    author = document.querySelector('.author');

    btn = document.querySelector('.btn');

    clearInputs() {
      this.title.value = '';
      this.author.value = '';
    }

    getFormValues() {
      const info = [this.title.value.trim(), this.author.value.trim()];
      this.clearInputs();
      return info;
    }

    addHandlerAdder(handler) {
      this.btn.addEventListener('click', (e) => {
        e.preventDefault();
        handler();
      });
    }
}
export default new AddBookUi();