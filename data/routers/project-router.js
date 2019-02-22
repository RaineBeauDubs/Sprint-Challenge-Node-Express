const express = require('express');
const ProjectDb = require('../helpers/projectModel');
const router = express.Router();

// Get Requests

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
        message: 'Oh, crap. There was an error adding this post.'
      });
  }
});

module.exports = router;