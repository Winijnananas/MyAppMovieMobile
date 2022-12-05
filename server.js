const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb+srv://admin:oam0942217092@mobilecluster.xug0att.mongodb.net/test', {
  useNewUrlParser: true
});

app.use(express.json());

// สร้าง database schema
const products = [{}];

app.post('/products', async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.status(201).end();
});