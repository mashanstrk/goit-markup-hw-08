const allButton = document.getElementById('all');
const webSiteButton = document.getElementById('webSite');
const appButton = document.getElementById('app');
const desineButton = document.getElementById('desine');
const marketingButton = document.getElementById('marketing');

const cards = document.querySelectorAll('.examples__item');

allButton.addEventListener('click', () => filterCards('all'));
webSiteButton.addEventListener('click', () => filterCards('webSite'));
appButton.addEventListener('click', () => filterCards('app'));
desineButton.addEventListener('click', () => filterCards('desine'));
marketingButton.addEventListener('click', () => filterCards('marketing'));

function filterCards(category) {
    cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block'; // Показати картку
        } else {
          card.style.display = 'none'; // Приховати картку
        }
      });
}


