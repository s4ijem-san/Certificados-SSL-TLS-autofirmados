const https = require('https');
const fs = require('fs');

const app = require('./app');

const options ={
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options,app).listen(8080,() => {
    console.log('Servidor HTTPS listen port 8080')
});