const express = require("express");
const router = express.Router();

notes = [
  {
    author: "tech #1",
    note: "Officia incididunt aliqua cillum excepteur aliqua.",
  },
  {
    author: "tech 2",
    note: "Ipsum consectetur mollit nulla ea fugiat non veniam do fugiat.",
  },
];

// API ROUTES
router.get("/warehouse", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  setTimeout(() => {
    res.send(JSON.stringify(notes));
  }, 1000);
});

module.exports = router;
