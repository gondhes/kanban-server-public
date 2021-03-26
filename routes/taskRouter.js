const router = require('express').Router()
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')
const {authentication, authorization} = require('../middlewares/auth')

router.use(authentication)
router.get('/', taskController.findAll)
router.get('/user', userController.currentUser)
router.post('/', taskController.create)
router.put('/:id', authorization, taskController.edit)
router.patch('/next/:id', authorization, taskController.nextCategory)
router.patch('/previous/:id', authorization, taskController.previousCategory)
router.delete('/:id', authorization, taskController.delete)

module.exports = router