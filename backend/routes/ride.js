const router = require('express').Router();
const ride = require('../controllers/ride');

router.post('/add-ride-cash', ride.addRideCash);
router.get('/my-rides', ride.myRides);

module.exports = {
  router: router,
  basePath: '/api'
};
