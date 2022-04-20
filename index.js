const http = require('http');
const axios = require('axios')

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}`)
    // console.log(Object.keys(process.env).sort().forEach(k => {console.log(`${k}: ${process.env[k]}`)}))
    if (process.env.MONGO_URL) {
        res.write('<html><body><h1>🚫 MONGO_URL not set 🚫</h1></body></html>');
    } else {
        res.write('<html><body><h1>🎉 MONGO_URL set! 🎉</h1></body></html>');
    }
    res.end();
}).listen(3000);
