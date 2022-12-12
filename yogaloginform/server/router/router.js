const router = require('express').Router()
const controller = require('../controller/controller');

router.post('/register', controller.registerUser);
router.get('/login', controller.login);

module.exports= router;