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

router.get('/:id', async (req, res) => {
  try {
    const action = await ActionDb.get(req.params.id);

    if (action) {
      res
        .status(200)
        .json(action)
    } else {
      res
        .status(404)
        .json({
          message: 'Oh, shoot. This action could not found.'
        }); 
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Awwh shucks, there was an error retrieving this action.'
      });
  }
});

module.exports = router;