class NavigationView {
    navLinks = document.querySelector('.nav-links')

    navLink = document.querySelectorAll('.nav-link')

    section = document.querySelectorAll('.section')

    year = document.querySelector('.year')
    setYear(date){

      this.year.textContent = `${date.day}-${date.month}-${date.year}, ${date.hour}:${date.minute}`;
    }
    navigate(){

      this.navLinks.addEventListener('click', (e) => {
        const clicked = e.target;
        if (!clicked.classList.contains('nav-link')) return;
        const { sect } = clicked.dataset;
        this.navLink.forEach((link) => link.classList.remove('nav-link--active'));
        clicked.classList.add('nav-link--active');
        this.section.forEach((link) => link.classList.remove('section--active'));

        document.querySelector(`.section-${sect}`).classList.add('section--active');
      });
    }
}
export default new NavigationView();