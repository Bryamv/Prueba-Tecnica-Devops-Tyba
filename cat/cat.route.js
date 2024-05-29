const express = require('express');
const { getCatController } = require('./cat.controller.js');
const { generateCatPage } = require('./cat.page.js');
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
module.exports = router;