//Dependencies
var express = require('express');
var router = express.Router();

//GET - Redirect the request to sub-catelog
router.get('/', function(req, res){
    let action = req.body.result && req.body.result.action ? req.body.result.action : '';
    if(action.length == 0) {
        res.redirect('/error');
    }
    else {        
        res.redirect('/vacancy');
    }
});

/* POST - Redirect the request to appropriate function */
router.post('/', function(req, res){        
    res.redirect('/vacancy');
});

module.exports = router;