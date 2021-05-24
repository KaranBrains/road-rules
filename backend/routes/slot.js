const router = require('express').Router();
const slot = require('../controllers/slot');

router.post('/add-slot', slot.addSlot);
router.put('/slot', slot.modifySlot);
router.get('/all-slots', slot.getSlots);
router.get('/slot', slot.getSlotById);
router.delete('/delete-slot', slot.addSlot);

module.exports = {
  router: router,
  basePath: '/api'
};
