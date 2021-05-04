import BASE from './connect';
import { innerContentGrid, contentGrid } from './handlers';

// Get data from API - is status approved (or fake)
// is it home page or setup page?
// create html
// add to page

function createHTML(rec, page = 'index') {
  let html = '';
  if (page === 'index') {
    console.log(rec);
    const [id, photo, categories] = [
      rec.id,
      rec.fields.Pictures[0].url,
      rec.fields['Setup Category'],
    ];
    html = `<div class="column setup__img is-one-quarter" data-id='${id}' data-categories='${categories.join(
      ' '
    )}'><a href='setup.html?id=${id}'><img class="photo" src='${photo}' loading='lazy'></a></div>`;
  } else {
    const [name, photo, website, twitter, category, items] = [
      rec.fields.Name,
      rec.fields.Pictures[0].url,
      rec.fields['Personal Website'],
      rec.fields['Twitter Username'],
      rec.fields['Setup Category'],
      rec.fields['Item List'],
    ];
    html = `
      <div class='columns '>
        <div class='column is-one-third pl-6 mt-6 is-flex is-flex-direction-column is-flex-wrap-wrap'>
          <div class="title is-lighter-dark is-3 pt-6">What's in the setup?</div>
          <p>${items}</p>
          <p class='is-italic mt-4'>Posted by <a href='https:/twitter.com/${twitter}'>${name}</a>
          <p><a href='${website}'>${
      website !== undefined ? website : ''
    }</a></p>
          <p class="mt-6 back"><a href='./index.html'>↞ BACK</a></p>
        </div>
        <div class='column is-two-thirds '>
          <div class="is-display-grid is-grid-start-center ">
            <img class='is-setup-image' src='${photo}' alt='A ${category} setup from ${name}'>
          </div>
        </div>
      </div>
    `;
  }

  return html;
}

function insertContentOnPage(setups) {
  console.log(setups);
  if (typeof setups === 'object') {
    setups.forEach(setup => {
      innerContentGrid.innerHTML += setup;
    });
  } else {
    const fragment = document.createRange().createContextualFragment(setups);
    contentGrid.appendChild(fragment);
  }
}

const getSetups = {
  all() {
    const allSetups = [];
    BASE('Form')
      .select()
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            if (record.fields.Status) {
              allSetups.push(createHTML(record));
            }
          });
          fetchNextPage();
        },
        function done(err) {
          insertContentOnPage(allSetups);
          if (err)
            console.log({
              err,
            });
        }
      );
  },
  single(id) {
    BASE('Form').find(id, function(err, record) {
      if (err)
        console.log({
          err,
        });
      insertContentOnPage(createHTML(record, 'setup'));
    });
  },
};

export { getSetups };
