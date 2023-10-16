// const express=require('express');
// const router= express.Router() ;
// const {SendEmail} = require('../Controllers/mailSender') ;

// router.get('/send/:wildcardValue*',SendEmail) ;


// module.exports=router;


const express = require('express');
const router = express.Router();
const { SendEmail } = require('../Controllers/mailSender');

// Define a wildcard route that matches /send/* and captures the wildcard value
router.get('/send/:wildcardValue*', SendEmail);

module.exports = router;