import { navBurger, navBurgerMenu } from './handlers';

function handleBurgerMenu() {
  navBurger.classList.toggle('is-active');
  navBurgerMenu.classList.toggle('is-active');
}

export { handleBurgerMenu };
