import { navBurger, navBurgerMenu, allSetups } from './handlers';

function handleBurgerMenu() {
  navBurger.classList.toggle('is-active');
  navBurgerMenu.classList.toggle('is-active');
}

function filterOptions(tag) {
  
  allSetups.forEach(setup => {
    console.log(`Setups ${setup}`);
    if (!setup.dataset.categories.includes(tag) && tag !== 'All') {
      setup.classList.add('is-hidden');
    } else {
      setup.classList.remove('is-hidden');
    } 
  });
  
}

export { handleBurgerMenu, filterOptions };
