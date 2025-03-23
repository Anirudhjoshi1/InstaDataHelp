const ensureAuthenticated = require('../Middlewares/Auth');


const router = require('express').Router();


router.get('/', ensureAuthenticated , (req , res)=>{
    
    res.status(200).json([
    {
        name: "anirudh",
        price: 100000
    },

    {
        name: "tv",
        price: 600000
    }
  ])
});

module.exports = router;
