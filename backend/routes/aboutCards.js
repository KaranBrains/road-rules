const router = require('express').Router();
const aboutCards = require('../controllers/aboutCards');

router.post('/add-about-cards',aboutCards.addAboutCards);
router.get('/about-cards',aboutCards.getAboutCards);
router.put('/update-about-cards',aboutCards.updateAbout);

module.exports = {
  router: router,
  basePath: '/api'
};
