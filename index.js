import bookstoraged from './modules/bookstoraged.js';
import currenttime from './modules/time.js';

class Bookshelf {
  constructor() {
    this.book = [];
  }

  add(title, author, shelfbook) {
    const newtitle = title;
    const newauthor = author;
    this.book.push({ name: newtitle, owner: newauthor });
    shelfbook.innerHTML += `
    <div class="${newtitle}">
      <h2>"${newtitle}" by ${newauthor}</h2>
      <button class="remove-btn">
        Remove
      </button>
    </div>`;
    localStorage.setItem('books', JSON.stringify(this.book));
  }

  remove(parent) {
    parent.remove();
    this.book = this.book.filter((x) => x.name !== parent.className);
    localStorage.setItem('books', JSON.stringify(this.book));
  }
}

const books = new Bookshelf();
const bookstorage = JSON.parse(localStorage.getItem('books'));
if (bookstorage != null) {
  books.book = bookstorage;
}

setInterval(currenttime, 1000);

const title = document.querySelector('#book');
const author = document.querySelector('#author');
const shelfbook = document.querySelector('.book-shelf');
const addbtn = document.querySelector('.add-btn');
const msga = document.querySelector('.msga');
const msgb = document.querySelector('.msgb');
const msgc = document.querySelector('.msgc');
const listtitle = document.querySelector('header');
const userinput = document.querySelector('.user-input');
const contact = document.querySelector('.contact');
const navitems = document.querySelectorAll('.ul-nav li');
const nav1 = document.querySelector('.nav-items1');
const nav2 = document.querySelector('.nav-items2');
const nav3 = document.querySelector('.nav-items3');

navitems.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (index === 0) {
      listtitle.classList.remove('active');
      shelfbook.classList.remove('active');
      contact.classList.remove('active');
      userinput.classList.remove('active');
      nav1.style.color = 'blue';
      nav2.style.color = 'black';
      nav3.style.color = 'black';
    } else if (index === 1) {
      listtitle.classList.add('active');
      shelfbook.classList.add('active');
      contact.classList.remove('active');
      userinput.classList.add('active');
      nav1.style.color = 'black';
      nav2.style.color = 'blue';
      nav3.style.color = 'black';
    } else if (index === 2) {
      listtitle.classList.add('active');
      shelfbook.classList.add('active');
      contact.classList.add('active');
      userinput.classList.remove('active');
      nav1.style.color = 'black';
      nav2.style.color = 'black';
      nav3.style.color = 'blue';
    }
  });
});

bookstoraged(books, shelfbook);

function hidemsga() {
  msga.classList.remove('active');
}
function hidemsgb() {
  msgb.classList.remove('active');
}
function hidemsgc() {
  msgc.classList.remove('active');
}

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
});
