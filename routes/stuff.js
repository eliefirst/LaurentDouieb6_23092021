const express = require('express');
const router = express.Router();

const stuffCrlt = require('../controllers/stuff');
const auth = require('../middleware/auth');


router.post('/', auth, stuffCrlt.createThing);
router.put('/:id', auth, stuffCrlt.modifyThing);
router.delete('/:id', auth, stuffCrlt.deleteThing);
router.get('/:id', auth, stuffCrlt.getOneThing);
router.get('/', auth, stuffCrlt.AllThing);
module.exports = router;