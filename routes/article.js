const express = require('express');
const passport = require('passport');
const db = require('../models');
require('../config/passport')(passport);

const router = express.Router();

/* GET ONE ARTICLE */
router.get('/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    db.Article.findOne({ _id: req.params.id }, function(err, article) {
      if (err) return err;
      res.json(article);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

/* GET ALL ARTICLES */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    db.Article.find(function(err, articles) {
      if (err) return err;
      console.log(articles);
      console.log('Authorized.');
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

/* SAVE ARTICLE */
router.post('/', passport.authenticate('jwt', { session: false }), function(req, res) {
  const token = getToken(req.headers);
  if (token) {
    db.Article.create(req.body, function(err, post) {
      if (err) return err;
      res.json(post);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

const getToken = function(headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    }
    return null;
  }
  return null;
};

module.exports = router;
