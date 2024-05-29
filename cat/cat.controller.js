import { getCat } from './cat.actions.js'

async function getCatController() {
    const cat = await getCat();
    return cat;
}

export { getCatController }