// ===== Menu BTN animation ==========

const menuBtn = document.querySelector('.menu__btn');
const menuBtnText = menuBtn.textContent;
const menuBtnLetters = menuBtnText.split('');
menuBtn.textContent = '';

// creating spna around evry letter

menuBtnLetters.forEach((letter) => {
  menuBtn.insertAdjacentHTML(
    'beforeend',
    `<span data-text="${letter}">${letter}</span>`,
  );
});

// adding animation

let tl = new TimelineMax({ repeat: -1, repeatDelay: 10, yoyo: true });

tl.staggerTo('.menu__btn span', 2, { y: 50 }, 0.1);

const dotsContainer = document.querySelector('.dots');
const sectionCollection = document.querySelectorAll('section');
const sectionCollectionClass = document.querySelectorAll('.section');
const currentSection = 0;

// Crate dots

function crateDots() {
  sectionCollection.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
      <li class="dots__item" data-num="${String(i + 1).padStart(2, '0')}">
      <a href='#section-${i}' class="dots__dot"></a>
      </li>
      `,
    );
  });
}

crateDots();

//  ==== Scroll to Section =====

const dotLink = document.querySelectorAll('.dots__dot');

// scroll and dots setting

function remonveActive() {
  dotLink.forEach((el) => {
    el.classList.remove('dots__dot--active');
    el.parentNode.classList.remove('dots__item--active');
  });
}

function addActive(e) {
  e.preventDefault();
  e.target.classList.add('dots__dot--active');
  e.target.parentNode.classList.add('dots__item--active');
}

dotLink.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    // ====== Working scroll Part 1========
    const id = el.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    // ================================

    // const id = el.getAttribute('href');
    // const currentSection = document.querySelector(id);
    // const sectionCoords = currentSection.getBoundingClientRect();
    // console.log(window.pageYOffset);
    // window.scrollTo({
    //   left: sectionCoords.left,
    //   top: sectionCoords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
    // // removing dots active class
    remonveActive();
    addActive(e);
  });
});

// ====  Revealing sections ====

const containerClass = document.querySelectorAll('.container');

for (let i = 1; i < containerClass.length; i++) {
  containerClass[i].classList.add('container--hidden');
}

function revealSection(enteries, observer) {
  const [entry] = enteries;
  entry.target.classList.remove('container--hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sectionCollectionClass.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('container--hidden');
});

//  ====== Menu ========

const menuList = document.querySelector('.menu__list');
const closeMobMen = document.querySelector('.menu__list-close');
const wrapperList = document.querySelector('.menu__left-wrapper');

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menuList.classList.add('menu__list--active');
});

closeMobMen.addEventListener('click', function (e) {
  e.preventDefault();
  menuList.classList.remove('menu__list--active');
});
