const router = require('express').Router()
const controller = require('../controller/controller');
const conn = require("../db/conn")

router.post('/register', controller.registerUser);
router.post('/login', controller.login);


module.exports= router;