const Router = require('express')
const router = new Router();
const authController = require('./authController')
const {check} = require('express-validator')
const authMeddleware = require('./middleware/authMiddleware')
const rolesMeddleware = require('./middleware/rolesMeddleware')

router.post('/register', [
    check('username', 'Имя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({min:6})
], authController.registration)
router.post('/login', authController.login)
router.get('/users',rolesMeddleware(['USER']) ,authController.getUsers)

module.exports = router