import express from 'express'

import { getCatController } from './cat.controller.js';
import { generateCatPage } from './cat.page.js';

const router = express.Router();

router.get('/cat', async (req, res) => {
    try {
        const [cat] = await getCatController();
        const page = generateCatPage(cat);
        res.status(200).send(page);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router;