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

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let Tax;
  Tax = ((cartTotal * taxRate) /100);

  res.send(Tax.toString());

});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let estimateDeliveryTime;
  if (shippingMethod === 'Standard') {
    estimateDeliveryTime = distance / 50;
  } else {
    estimateDeliveryTime = distance / 100;
  }
  res.send(estimateDeliveryTime.toString())
});

app.get('/shipping-cost', (req,res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = (weight * distance * 0.1)
  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * loyaltyRate;
  res.send(loyaltyPoints.toString());   
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


