const express = require('express');
const router = express.Router();
const Balance = require('../models/balance');
const Payment = require('../models/payments');

//Index route
router.get("/", (req, res) => {
  Balance.find({}, (err, foundBalances) => {
    if(err){
      console.log('error in find');
      console.log(err);
    } else {
      res.render('balanceViews/index.ejs', {balances: foundBalances});
    }
  });
});

//New route
router.get("/new", (req, res) => {
  res.render("balanceViews/new.ejs", {})
});

//Create route
router.post("/", (req, res) => {
  Balance.create(req.body, (err, newBalance) => {
    if(err){
      console.log(err, 'error in create');
      res.render("balanceViews/new.ejs");
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
      res.render("balanceViews/show.ejs", {
        balance: balance,
        payments: balance.payments,
      });
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
      res.render("balanceViews/edit.ejs", {balance: foundBalance});
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


//================================================================================================//


//Payment routes

//new route
router.get("/:id/payments/new", (req, res) => {
  console.log(req.params.id);
  //find balance by id
  Balance.findById(req.params.id, (err, foundBalance) => {
    if(err){
      console.log(err, 'error in add new payment route');
    } else {
      res.render('paymentViews/new.ejs', {balance: foundBalance});
    }
  });
});

//Create route
router.post("/:id/payments", (req, res) => {
  //find balance by id
  Balance.findById(req.params.id, (err, foundBalance) => {
    if(err){
      console.log(err, 'error in create');
      res.redirect('/');
    } else {
      Payment.create(req.body, (err, payment) => {
        if(err){
          console.log(err, 'error in creat payment');
        } else {
          foundBalance.payments.push(payment);
          foundBalance.save();
          res.redirect('/balances/' + foundBalance._id);
        }
      });
    }
  });
});













module.exports = router;
