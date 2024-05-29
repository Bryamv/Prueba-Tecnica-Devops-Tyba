import { getCat } from './cat.actions.js'

async function getCatController() {
    const cat = await getCat();
    if (!cat) {
        throw new Error('Failed to fetch cat');
    }
    return cat;
}

export { getCatController }