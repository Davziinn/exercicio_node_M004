const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('pedidos/index', {
        nomeUsuario: "DAVI",
    });
})

module.exports = router;