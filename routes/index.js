const router = require('express').Router()
const task = require('./taskRouter')
const userController = require('../controllers/userController')

router.use('/tasks', task)

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleLogin', userController.googleLogin)

module.exports = router