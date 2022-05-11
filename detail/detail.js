import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    // on load
    // get the id from URL
    const parameters = new URLSearchParams(window.location.search);
    const dogId = parameters.get('id');
    // use the id to fetch the dog
    const dog = await getDog(dogId);
    // render and append this dog's details to the container
    dogDetailContainer.append(renderDogDetail(dog));
}

loadData();