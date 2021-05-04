import { getSetups } from './src/js/renderContent';
import { categoryTag, navBurger, allSetups } from './src/js/handlers';
import { handleBurgerMenu, filterOptions } from './src/js/events';

const queryParams = new URLSearchParams(window.location.search);

if (!queryParams.has('id')) {
  getSetups.all();
} else {
  getSetups.single(queryParams.get('id'));
}

// EVENT LISTENERS
navBurger.addEventListener('click', handleBurgerMenu);

categoryTag.forEach(tag => {
  tag.addEventListener('click', () => {
    filterOptions(tag.dataset.category);
  });
});

function filterOptions(tag) {
  allSetups.forEach(setup => {
    if (!setup.dataset.categories.includes(tag) && tag !== 'All') {
      setup.classList.add('is-hidden');
    } else {
      setup.classList.remove('is-hidden');
    }
  });
}