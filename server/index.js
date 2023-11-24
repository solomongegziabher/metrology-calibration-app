// server/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/submit_calibration', (req, res) => {
  const { equipment, calibrationDate } = req.body;

  // Process and store calibration data in the database (not implemented in this example)

  res.json({ success: true, message: `Calibration submitted for ${equipment} on ${calibrationDate}.` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

