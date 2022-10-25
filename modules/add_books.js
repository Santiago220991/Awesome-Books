import { hidemsga, hidemsgb, hidemsgc } from './error_messages.js'

const addbtn = document.querySelector('.add-btn');
const title = document.querySelector('#book');
const author = document.querySelector('#author');
const msga = document.querySelector('.msga');
const msgb = document.querySelector('.msgb');
const msgc = document.querySelector('.msgc');
const shelfbook = document.querySelector('.book-shelf');

const add_book = (books) => {
addbtn.addEventListener('click', () => {
    if (title.value === '' || author.value === '') {
      msga.classList.add('active');
      setTimeout(hidemsga, 2000);
    } else if (books.book.filter((element) => element.name === title.value).length !== 0) {
      msgb.classList.add('active'); setTimeout(hidemsgb, 2000);
    } else {
      msgc.classList.add('active');
      setTimeout(hidemsgc, 2000);
      books.add(title.value, author.value, shelfbook);
      const removeBtn = document.querySelectorAll('.remove-btn');
      removeBtn.forEach((element) => {
        element.addEventListener('click', () => {
          const parent = element.parentNode;
          books.remove(parent);
        });
      });
    }
  })
};

export default add_book;