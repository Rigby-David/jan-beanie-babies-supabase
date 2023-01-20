/* Imports */
import { renderBabies, renderOptions } from './render-utils.js';
import { getBeanieBabies, getBeanieThemes } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabyUl = document.querySelector('.beanie-baby-card');
const beanieSelectEl = document.getElementById('beanie-select');
/* State */
let beanieBabiesState = [];
let beanieThemesState = [];
/* Events */
window.addEventListener('load', async () => {
    const response = await getBeanieBabies();
    beanieBabiesState = response.data;

    const resp = await getBeanieThemes();
    beanieThemesState = resp.data;

    for (let beanie of beanieBabiesState) {
        const newBeanieEl = renderBabies(beanie);
        beanieBabyUl.append(newBeanieEl);
    }

    for (let beanie of beanieThemesState) {
        console.log('beanie', beanie);
        const optionEl = renderOptions(beanie);
        beanieSelectEl.append(optionEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
