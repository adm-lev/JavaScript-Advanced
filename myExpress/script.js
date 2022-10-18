'use strict';

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('connected...');
});
app.get('/', (req, res) => {
    res.send('<h2>Response from server</h2>');
})