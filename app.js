//const tracer = require('dd-trace').init();
//const axios = require('axios');

//(async () => {
 // const { data: hostname } = await axios.get('http://169.254.169.254/latest/meta-data/local-ipv4');
  //tracer.setUrl(`http://${hostname}:8126`);
//})();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!op');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
