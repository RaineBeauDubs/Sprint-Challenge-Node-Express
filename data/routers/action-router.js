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

//POST REQUEST

router.post('/', async (req, res) => {
  try {
    const action = await ActionDb.insert(req.body);
    res
      .status(201)
      .json(action);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Oh, crap. There was an error adding this action.'
      });
  }
});

//UPDATE REQUEST

router.put('/:id', async (req, res) => {
  try {
    const action = await ActionDb.update(req.params.id, req.body);
    if (action) {
      res
        .status(200)
        .json(action);
    } else {
      res
        .status(404)
        .json({
          message: 'Poop. This action could not be found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Gah, there was an error updating this action!'
      });
  }
});

// DELETE REQUEST

router.delete('/:id', async (req, res) => {
  try {
    const count = await ActionDb.remove(req.params.id);
    if (count > 0) {
      res
      .status(200)
      .json({
        message: 'Yay! This action has been successfully deleted.'
      });
    } else {
      res
        .status(404)
        .json({
          message: 'Awwh shiznits, this action could not be found!'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Well, darn it, there was an error removing this action.'
      });
  }
});

module.exports = router;