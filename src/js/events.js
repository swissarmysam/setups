import { navBurger, navBurgerMenu } from './handlers';

function handleBurgerMenu() {
  navBurger.classList.toggle('is-active');
  navBurgerMenu.classList.toggle('is-active');
}

function filterOptions(setups, tag) {
  console.log(setups);
  setups.forEach(setup => {
    if (!setup.dataset.categories.includes(tag) && tag !== 'All') {
      setup.classList.add('is-hidden');
    } else {
      setup.classList.remove('is-hidden');
    }
  });
}

export { handleBurgerMenu, filterOptions };
