const router=require('express').Router()

const {userChecker,tokenChecker} = require('../controllers')

router.route('/email-checker').post(userChecker)
router.route('/tokenVerify').post(tokenChecker)

module.exports=router