const express = require('express');

const { User } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
    const users = await User.find();

    res.json({
        sucesso: true,
        users,
    })

});

module.exports = router;
