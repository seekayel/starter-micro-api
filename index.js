const express = require('express');
const app = express()

app.use('*', (req, res) => {
    console.log(`Request for ${req.url}`)
    // console.log(Object.keys(process.env).sort().forEach(k => {console.log(`${k}: ${process.env[k]}`)}))
    if (process.env.MONGO_URL) {
      res.send('<html><body><h1>🎉 MONGO_URL set! 🎉</h1></body></html>');
    } else {
      res.send('<html><body><h1>🚫 MONGO_URL not set 🚫</h1></body></html>');
    }
    res.end();
}).listen(3000);
