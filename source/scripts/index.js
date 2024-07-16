//*** Mobile Menu ***/

const mainPage = document.querySelector('.main-page');
const footer = document.querySelector('.footer');
const headerNav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header-burger');

mainPage.classList.remove('nav-no-js');
footer.classList.remove('nav-no-js');
headerNav.classList.remove('menu-open-no-js');
burgerButton.classList.remove('menu-open-js');
burgerButton.classList.remove('menu-open-no-js');

const mobileMenuHandler = () => {
  headerNav.classList.toggle('menu-toogle-js');
  mainPage.classList.toggle('nav-no-js');
  footer.classList.toggle('nav-no-js');
  burgerButton.classList.toggle('menu-open-js');
};

burgerButton.addEventListener('click', mobileMenuHandler);

//*** Slider ***/

const sliderContainer = document.querySelector('.slider__list');
const slides = sliderContainer.querySelectorAll('.slider__item');
const sliderControlsContainer = document.querySelector('.slider__controls');
const sliderControls = sliderControlsContainer.querySelectorAll('.slider__control');

let counter = 0;

sliderContainer.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('slider__button--prev') || evt.target.classList.contains('icon-button--prev')) {
    slides[counter].classList.toggle('slider__item--current');
    sliderControls[counter].classList.toggle('slider__control--active');
    counter--;
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slides[counter].classList.toggle('slider__item--current');
    sliderControls[counter].classList.toggle('slider__control--active');
  } else if (evt.target.classList.contains('slider__button--next') || evt.target.classList.contains('icon-button--next')) {
    slides[counter].classList.toggle('slider__item--current');
    sliderControls[counter].classList.toggle('slider__control--active');
    counter++;
    if (counter >= slides.length) {
      counter = 0;
    }
    slides[counter].classList.toggle('slider__item--current');
    sliderControls[counter].classList.toggle('slider__control--active');
  }

  sliderControls.forEach((item, index) => {
    item.addEventListener('click', () => {
      slides[counter].classList.toggle('slider__item--current');
      sliderControls[counter].classList.toggle('slider__control--active');
      counter = index;
      slides[counter].classList.toggle('slider__item--current');
      sliderControls[counter].classList.toggle('slider__control--active');

    });
  });
});

//*** MAP - Leaflet ***/

document.querySelector('#map').classList.remove('map-js');

const map = L.map('map')
  .on('load', () => {
    document.querySelector('.map').classList.remove('map-no-js');
  })
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../images/map-pin@2x.png',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
