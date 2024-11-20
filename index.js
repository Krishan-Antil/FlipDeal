// const express = require('express');
const { resolve } = require('path');

// const app = express();
const port = 3000;

// app.use(express.static('static'));



let express = require("express");
let cors = require("cors");

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



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
