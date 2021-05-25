const router = require('express').Router();
const instructor = require('../controllers/instructor');

router.post('/add-instructor', instructor.addInstructor);

module.exports = {
  router: router,
  basePath: '/api'
};
