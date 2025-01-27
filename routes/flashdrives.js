const express = require('express');
const router = express.Router();
const flashdriveController = require('../controllers/flashdriveController');

// Rutas CRUD
router.post('/', flashdriveController.createFlashDrive);
router.get('/', flashdriveController.getAllFlashDrives);
router.get('/:id', flashdriveController.getFlashDriveById);
router.put('/:id', flashdriveController.updateFlashDrive);
router.delete('/:id', flashdriveController.deleteFlashDrive);

module.exports = router;
