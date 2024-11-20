// const express = require('express');
const { resolve } = require('path');

// const app = express();
const port = 3000;

// app.use(express.static('static'));



let express = require("express");
let cors = require("cors");
const res = require('express/lib/response');

let app = express();
app.use(cors());

// Server-side Values
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let cartTotalFinal = cartTotal + newItemPrice;
  res.send(cartTotalFinal.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = (req.query.isMember === 'true');
  let discountedPrice;
  if (isMember) {
    discountedPrice = cartTotal - ((cartTotal * discountPercentage) / 100);
  } else {
    discountedPrice = cartTotal;
  }
  res.send(discountedPrice.toString());
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
