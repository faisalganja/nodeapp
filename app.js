const tracer = require('dd-trace').init({
  sampling: {
    sampleRate: 0.1, // Sample 10% of requests
  },
});

const axios = require('axios');

(async () => {
  try {
    const { data: hostname } = await axios.get('http://169.254.169.254/latest/meta-data/local-ipv4');
    process.env.DD_AGENT_HOST = hostname; // Set Datadog Agent host
    process.env.DD_TRACE_AGENT_PORT = '8126'; // Set Datadog Agent port
    console.log(`Datadog Agent configured to use host: ${hostname}`);
  } catch (error) {
    console.error('Failed to fetch local IP address:', error.message);
  }
})();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
