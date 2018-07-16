const express = require('express');
const router = express.Router();
const Balance = require('../models/balance');

//Index route
router.get("/", (req, res) => {
  Balance.find({}, (err, foundBalances) => {
    if(err){
      console.log('error in find');
      console.log(err);
    } else {
      res.render('index.ejs', {balances: foundBalances});
    }
  });
});

//New route
router.get("/new", (req, res) => {
  res.render("new.ejs", {})
});

//Create route
router.post("/", (req, res) => {
  Balance.create(req.body, (err, newBalance) => {
    if(err){
      console.log(err, 'error in create');
      res.render("new.ejs");
    } else {
      res.redirect("/balances");
    }
  });
});

//Show route
router.get("/:id", (req, res) => {
  Balance.findById(req.params.id, (err, balance) => {
    if(err){
      console.log(err, 'error in show');
      res.send(err);
    } else {
      console.log(req.params.id);
      res.render("show.ejs", {balance: balance});
    }
  });
});

//Edit route
router.get("/:id/edit", (req, res) => {
  Balance.findById(req.params.id, (err, foundBalance) => {
    if(err) {
      console.log(req.params.id, 'this is id');
      res.send(err);
    } else {
      res.render("edit.ejs", {balance: foundBalance});
    }
  });
});

//Update route
router.put("/:id", (req, res) => {
  Balance.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, balance) => {
    if(err){
      console.log(err, 'error in update');
      res.send(err);
    } else {
      res.redirect("/balances");
    }
  });
});
//Destroy route
router.delete("/:id", (req, res) => {
  Balance.findByIdAndRemove(req.params.id, (err, balance) => {
    if(err){
      console.log(err, 'error in delete');
      res.send(err);
    } else {
      res.redirect("/balances");
    }
  });
});















module.exports = router;
