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

module.exports = router;