const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 2, {height: '0%'}, {height: '100%', ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(hamburger, 1.2, {opacity: 0, y: '-200%'}, {opacity: 1, y: '0%', ease: Power2.easeInOut})
.fromTo(logo, 1.2, {x: '-300%'}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
.fromTo(headline, 1.2, {y: '500%'}, {y: '0%', ease: Power2.easeInOut}, '-=1.2')