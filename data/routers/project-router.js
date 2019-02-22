const express = require('express');
const ProjectDb = require('../helpers/projectModel');
const router = express.Router();

// GET REQUESTS

router.get('/', async (req, res) => {
  try {
    const projects = await ProjectDb.get();
    res
      .status(200)
      .json(projects);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Oh, no! Error retrieving projects!'
      });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await ProjectDb.get(req.params.id);

    if (project) {
      res
        .status(200)
        .json(project)
    } else {
      res
        .status(404)
        .json({
          message: 'Oh, shoot. This project could not found.'
        }); 
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Awwh shucks, there was an error retrieving this project.'
      });
  }
});

//POST REQUEST

router.post('/', async (req, res) => {
  try {
    const project = await ProjectDb.insert(req.body);
    res
      .status(201)
      .json(project);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Oh, crap. There was an error adding this project.'
      });
  }
});

//UPDATE REQUEST

router.put('/:id', async (req, res) => {
  try {
    const project = await ProjectDb.update(req.params.id, req.body);
    if (project) {
      res
        .status(200)
        .json(project);
    } else {
      res
        .status(404)
        .json({
          message: 'Poop. This project could not be found.'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Gah, there was an error updating this post!'
      });
  }
});

// DELETE REQUEST

router.delete('/:id', async (req, res) => {
  try {
    const count = await ProjectDb.remove(req.params.id);
    if (count > 0) {
      res
      .status(200)
      .json({
        message: 'Yay! This project has been successfully deleted.'
      });
    } else {
      res
        .status(404)
        .json({
          message: 'Awwh shiznits, this project could not be found!'
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Well, darn it, there was an error removing this project.'
      });
  }
});

module.exports = router;