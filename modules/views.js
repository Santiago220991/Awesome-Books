const listtitle = document.querySelector('header');
const userinput = document.querySelector('.user-input');
const contact = document.querySelector('.contact');
const navitems = document.querySelectorAll('.ul-nav li');
const nav1 = document.querySelector('.nav-items1');
const nav2 = document.querySelector('.nav-items2');
const nav3 = document.querySelector('.nav-items3');
const shelfbook = document.querySelector('.book-shelf');

export const views=()=>{
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
})
};