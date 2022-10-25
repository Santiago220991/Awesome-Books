import bookstoraged from './modules/bookstoraged.js';
import currenttime from './modules/time.js';
import views from './modules/views.js';
import addBook from './modules/add_books.js';

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

const shelfbook = document.querySelector('.book-shelf');

views();

bookstoraged(books, shelfbook);

addBook(books);
