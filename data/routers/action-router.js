const express = require('express');
const ActionDb = require('../helpers/actionModel');
const router = express.Router();

// Get Requests

router.get('/', async (req, res) => {
  try {
    const actions = await ActionDb.get();
    res
      .status(200)
      .json(actions);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Oh, no! Error retrieving actions!'
      });
  }
});

module.exports = router;