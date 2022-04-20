var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}`)
    console.log(Object.keys(process.env).sort().forEach(k => {console.log(`${k}: ${process.env[k]}`)}))
    res.write(process.env.MONGO_URL||'Yo!');
    res.end();
}).listen(3000);
