const express = require('express');
const router = express.Router();




//new route
router.get("/balances/:id/new", (req, res) => {
  //find balance by id
  Balance.findById(req.params.id, (err, balance) => {
    if(err){
      console.log(err, 'error in add new payment route');
    } else {
      res.render('paymentViews/new.ejs', {balance: balance});
    }
  });
});

//Create route
router.post("/balances/:id", (req, res) => {
  Payment.create(req.body, (err, newPayment) => {
    if(err){
      console.log(err, 'error in create');
      res.render("new.ejs");
    } else {
      res.redirect("/payments");
    }
  });
});


//Edit route
router.get("/:id/edit", (req, res) => {
  Payment.findById(req.params.id, (err, foundPayment) => {
    if(err) {
      console.log(req.params.id, 'this is id');
      res.send(err);
    } else {
      res.render("edit.ejs", {payment: foundPayment});
    }
  });
});

//Update route
router.put("/:id", (req, res) => {
  Payment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, payment) => {
    if(err){
      console.log(err, 'error in update');
      res.send(err);
    } else {
      res.redirect("/payments");
    }
  });
});
//Destroy route
router.delete("/:id", (req, res) => {
  Payment.findByIdAndRemove(req.params.id, (err, payment) => {
    if(err){
      console.log(err, 'error in delete');
      res.send(err);
    } else {
      res.redirect("/payments");
    }
  });
});







module.exports = router;
