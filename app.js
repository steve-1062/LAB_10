'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to RAILWAY TENDER SERVICES ");
        res.write(' Welcome to RAILWAY TENDER SERVICES');
        res.end();
    } else {
      //  res.writeHead(200);
        res.write('Server loaded.');
        res.end();

    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 3000");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//
let employee = {
    "employee":[
        {
            "name": "Akshaya",
            "email": "akshayagmail.com",
            "phone": "9148827639",
            "role": "Zonal Manager",
            "performance": 0.92,
            "salary": 20000
        },
        {
            "name": "Pavan",
            "email": "pavan@gmail.com",
            "phone": "9100997798",
            "role": "Divisional Manager",
            "performance": 0.65,
            "salary": 12000
        },
        {
            "name": "Ashwin",
            "email": "ashwin@gmail.com",
            "phone": "9800657341",
            "role": "Electrical Engineer",
            "performance": 0.78,
            "salary": 23000
        },
        {
            "name": "Vaishnavi",
            "email": "vaishnavi@gmail.com",
            "phone": "8935667832",
            "role": "Signal manager",
            "performance": 0.91,
            "salary": 21300
        },
        {
            "name": "Pooja",
            "email": "pooja@gmail.com",
            "phone": "91009902",
            "role": "Zonal Manager",
            "performance": 0.87,
            "salary": 12000
        },
        {
            "name": "Sandy",
            "email": "sandy@gmail.com",
            "phone": "9167990012",
            "role": "Divisional manager",
            "performance": 0.78,
            "salary": 10000
        }
]

};

let data = JSON.stringify(employee);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let employee = JSON.parse(data);
    console.log(employee);

});