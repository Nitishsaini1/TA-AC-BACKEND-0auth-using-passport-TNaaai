var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/github', passport.authenticate(`github`))

router.get('/auth/google', passport.authenticate(`google`, {
  scope: ['profile', 'email']
}))


router.get('/auth/github/callback', passport.authenticate(`github`, {failureRedirect: `/failure`}), (req, res) => {
  res.redirect(`/articles/form`)
})

router.get('/oauth2/redirect/google/', 
  passport.authenticate('google', { failureRedirect: '/failure'}),
  function(req, res) {
    res.redirect('/articles/form');
  });

module.exports = router;