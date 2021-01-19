// https://www.youtube.com/watch?v=wxbQP1LMZsw&list=LL&index=10&t=2s&ab_channel=TheCodingTrain
// 2.1 Server-side with Node.js - Working with Data and APIs in JavaScript

const express = require('express')
const app = express()
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'))



