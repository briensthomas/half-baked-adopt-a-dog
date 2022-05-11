import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

async function loadData() {
    // on load
    const dogs = await getDogs();
    // fetch all dogs
    for (let dog of dogs) {
        // render and append all dog cards to the container
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}

loadData();