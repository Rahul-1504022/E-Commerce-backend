const router = require('express').Router();
const passport = require('passport');
require('../config/authGoogleConfig');
const path = require('path');

router.route('/userinfo')
    .get((req, res) => {
        if (req.user) {
            return res.status(200).send(req.user);
        } else {
            return res.status(400).send("failed to login");
        }
    })

//(When user click the button)
router.route('/')
    .get(passport.authenticate("google", { scope: ["profile", "email"] }))

//  (When google redirect)
router.route('/redirect')
    .get(passport.authenticate("google", { session: false }), (req, res) => {
        // return res.status(200).send(req.user); //user is a by default attribute
        // res.sendFile(path.join(__basedir, "public/loginSuccess.html"));
        // res.writeHead(301, {
        //     Location: `http://localhost:3000/home`
        // }).end();
    })

module.exports = router;

//Session Based Authentication
//Token Based Authentication