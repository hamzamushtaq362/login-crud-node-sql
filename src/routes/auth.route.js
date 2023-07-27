const router = require("express").Router();
const auth = require('../controller/user.controller');
const middleware = require("../middleware/auth.middleware");

router.post('/signup',auth.signup);
router.post('/login',auth.login);

router.get('/say',middleware.auth, auth.sayHello);
router.get('/user/:userId',middleware.auth, auth.user);
router.put('/updateUser/:userId',middleware.auth, auth.updateUser);
router.delete('/deleteUser/:userId',middleware.auth, auth.delete);

module.exports = router;