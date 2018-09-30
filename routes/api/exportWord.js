const express = require('express')
const router = express.Router()
var officegen = require('officegen');
var fs    = require('fs');
var path  = require('path');
var docx  = officegen ('docx');
var async = require('async');

router.post('/', (req, res, next) => {
  console.log(req.body);
  var form = req.body;
  res.send({
    code: 200,
    data: form,
    msg: 'success'
  })
})

// router.get('/', (req, res, next) => {
//   console.log(req.query);

// })

module.exports = router