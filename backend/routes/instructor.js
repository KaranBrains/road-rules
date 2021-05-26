const router = require('express').Router();
const instructor = require('../controllers/instructor');

router.post('/add-instructor', instructor.addInstructor);
router.post('/get-instructors', instructor.getAll);

module.exports = {
  router: router,
  basePath: '/api'
};
