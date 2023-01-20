/* Imports */
import { renderBabies } from './render-utils.js';
import { getBeanieBabies } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabyUl = document.querySelector('.beanie-baby-card');
/* State */
let beanieBabiesState = [];
/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();

    beanieBabiesState = response.data;

    for (let beanie of beanieBabiesState) {
        const newBeanieEl = renderBabies(beanie);
        beanieBabyUl.append(newBeanieEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
