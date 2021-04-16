/* ALL OF THE MAIN SELECTORS */

const contentGrid = document.querySelector('.grid-content');
const innerContentGrid = contentGrid.querySelector('.columns');
const navBurger = document.querySelector('.navbar-burger');
const navBurgerMenu = document.querySelector('.navbar-menu');
const categoryTag = document.querySelectorAll('[data-category]');
const allSetups = document.querySelectorAll('[data-categories]');

export { contentGrid, innerContentGrid, navBurger, navBurgerMenu, categoryTag, allSetups };
