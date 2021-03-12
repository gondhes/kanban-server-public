const router = require('express').Router()
const taskController = require('../controllers/taskController')
const {authentication, authorization} = require('../middlewares/auth')

router.use(authentication)
router.get('/', taskController.findAll)
router.get('/:id', authorization, taskController.findOne)
router.post('/', taskController.create)
router.patch('/:id', authorization, taskController.updateCategory)
router.delete('/:id', authorization, taskController.delete)

module.exports = router