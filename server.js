const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// DONE
app.post('/createAccount', require('./server/createAccount'));
app.post('/topUp', require('./server/topUp'));
app.post('/getBalance', require('./server/getBalance'));
app.post('/getCharges', require('./server/getCharges'));
app.post('/listAccounts', require('./server/listAccounts'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
