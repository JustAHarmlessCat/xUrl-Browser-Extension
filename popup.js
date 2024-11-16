import { currentTab } from './shorten.js';

document.getElementById('getCurrentURLButton').addEventListener('click', async () => {
    console.log('Button clicked');
    try {
        currentTab();
    } catch (error) {
        console.error('Error calling currentTab function:', error);
    }
});
