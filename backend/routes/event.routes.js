const router = require('express').Router();
const eventController = require('../controllers/event.controller');
const multer = require("multer");
const upload = multer();

// Avoir tous les messages
router.get('/', eventController.readEvent);

// eventer un message
router.post('/', upload.single("file"), eventController.createEvent);

// Update d'un event
router.put('/:id', eventController.updateEvent);

// Supprimer un event
router.delete('/:id', eventController.deleteEvent);

router.patch('/inscrire-event/:id', eventController.inscrireEvent);
router.patch('/desinscrire-event/:id', eventController.desinscrireEvent);

module.exports = router;