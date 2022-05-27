const bookstoraged = (books, shelfbook) => {
  if (books.book !== null) {
    books.book.forEach((element) => {
      shelfbook.innerHTML += `
      <div class="${element.name}">
        <h2>"${element.name}" by ${element.owner}</h2>
        <button class="remove-btn">
          Remove
        </button>
      </div>`;
    });
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const parent = element.parentNode;
        books.remove(parent);
      });
    });
  }
};
export default bookstoraged;