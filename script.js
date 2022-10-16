// const c = require('./func');

// console.log(c.func.a(10));
// console.log(c.func.b(10));

// const os = require('os');

// console.log(os);

const fs = require ('fs');
const users = [{name:"Ivan", id: 20}];

fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err)
    } else {
        console.log('successful write')
    }
});



