const express = require('express');
const app = express()


app.get('/gallery/album/:album', (req, res) => {
  const album = req.params.album
  const encodedName = encodeURI(`where={"album":"${album}"}`)

  console.log('album: ',album)
  console.log('encodedName: ',encodedName)
  res.status(200).send('Ok')
})

app.use('*', (req, res) => {
  console.log(`Request for ${req.url}`)
  // console.log(Object.keys(process.env).sort().forEach(k => {console.log(`${k}: ${process.env[k]}`)}))
  if (req.accepts('json')) {
    res.json({url: req.originalUrl, path: req.baseUrl+req.path, query: req.query});
  } else {
    res.send('<html><body><h1>Wanting to send json. Sorry.</h1></body></html>');
  }
  res.end();
}).listen(3000);
