const router = require('express').Router();
const testimonial = require('../controllers/testimonial');

router.post('/add-testimonial',testimonial.addTestimonial);
router.get('/testimonial',testimonial.getTestimonial);
router.put('/update-testimonial',testimonial.updateTestimonial);

module.exports = {
  router: router,
  basePath: '/api'
};
