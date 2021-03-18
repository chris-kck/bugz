var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user', function(req, res, next) {

  res.json({haha:`respond with a resource ${req.params.user}`});
});

module.exports = router;
