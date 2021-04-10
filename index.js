import { getSetups } from './src/js/renderContent';
import { navBurger } from './src/js/handlers';
import { handleBurgerMenu, handleModal } from './src/js/events';

const queryParams = new URLSearchParams(window.location.search);

if (!queryParams.has('id')) {
  getSetups.all();
} else {
  getSetups.single(queryParams.get('id'));
}

// EVENT LISTENERS
navBurger.addEventListener('click', handleBurgerMenu);
