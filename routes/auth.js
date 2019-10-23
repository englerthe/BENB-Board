const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const userPassword = req.body.password;
  const email = req.body.email;

  if (firstname === "" || lastname === "" || username === "" || userPassword === "" || email === "") { //check if post values are not empty
    res.status(200).json({ errorMessage: 'Please fill in all necessary fields to sign up' });
    return;
  }
  else {
    User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
        console.log("User with username exists already:" + username);
        res.status(200).json({ errorMessage: 'this user already exists' });
        return;
      }
      /* else
        if (email !== null) {
        console.log("User with email exists already:" + username);
        res.status(200).json({ errorMessage: 'this email is already registered' });
        return;
      }>*/
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const password = bcrypt.hashSync(userPassword, salt);

      const userPassworEncrypted = { username, password, firstname, lastname, email };
      console.log("User will be created:" + userPassworEncrypted);

      User
        .create(userPassworEncrypted)
        .then((user) => {
          res.status(200).json(user);
        })
        .catch(err => console.log(err));
    });
  }
});



router.post("/login", (req, res) => {
  const username = req.body.username;
  const userPassword = req.body.password;
  User.findOne({ username }, "_id username password firstname lastname", (err, user) => {
    if (err || !user) {
      res.status(200).json({ errorMessage: "The username doesn't exist." });
    } else {
      if (bcrypt.compareSync(userPassword, user.password)) {
        req.session.currentUser = user;
        res.status(200).json(user);
      } else {
        res.status(200).json({ errorMessage: "Incorrect password." });
      }
    }
  });
});


router.get("/logout", (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(200).json({ errorMessage: "logged out" });
    return;
  }
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ errorMessage: "logged out" });
    }
  });
});

module.exports = router;
