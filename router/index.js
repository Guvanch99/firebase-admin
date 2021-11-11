const router=require('express').Router()

const userChecker = require('../controllers')


router.route('/').post(userChecker)

module.exports=router