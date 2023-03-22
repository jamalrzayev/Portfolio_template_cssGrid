const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-done');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});