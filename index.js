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
    filterOptions(allSetups, tag.dataset.category);
    console.log(`${tag.dataset.category} clicked`);
  });
});
