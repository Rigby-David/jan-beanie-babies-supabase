/* Imports */
import { renderBabies, renderOptions } from './render-utils.js';
import { getBeanieBabies, getBeanieThemes } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabyUl = document.querySelector('.beanie-baby-card');
const beanieSelectEl = document.getElementById('beanie-select');
const beanieFormEl = document.getElementById('beanie-form');
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
        // console.log('beanie', beanie);
        const newBeanieEl = renderBabies(beanie);
        beanieBabyUl.append(newBeanieEl);
    }

    for (let beanie of beanieThemesState) {
        const optionEl = renderOptions(beanie);
        beanieSelectEl.append(optionEl);
    }
});

beanieFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    beanieBabyUl.textContent = '';
    const value = beanieSelectEl.value;
    const response = await getBeanieBabies(value);
    beanieBabiesState = response.data;
    for (let beanie of beanieBabiesState) {
        const newBeanieEl = renderBabies(beanie);
        beanieBabyUl.append(newBeanieEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
