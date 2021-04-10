import { navBurger, navBurgerMenu, modal } from './handlers';

function handleBurgerMenu() {
  navBurger.classList.toggle('is-active');
  navBurgerMenu.classList.toggle('is-active');
}

function handleModal() {
  console.log('click');
  modal.classList.toggle('is-active');
}

export { handleBurgerMenu, handleModal };
