const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil', {
        nome: "Davi Menezes",
        idade: 19
    });
});

module.exports = router;