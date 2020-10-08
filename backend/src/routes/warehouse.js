const express = require('express');
const router = express.Router();

notes = {
  "note": "I logged into the location and have confirmed a problem!"
}


// API ROUTES
router.get("/warehouse", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    setTimeout(() => {  res.send(JSON.stringify( notes )); }, 1000);
  });

module.exports = router;