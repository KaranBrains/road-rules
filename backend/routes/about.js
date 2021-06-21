const router = require('express').Router();
const about = require('../controllers/about');

router.post('/add-about',about.addAbout);
router.get('/about',about.getAbout);
router.put('/update-about',about.updateAbout);

module.exports = {
  router: router,
  basePath: '/api'
};
