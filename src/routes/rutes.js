const { Router } = require("express");
const { inicio, insertPerson, renderForm, insertEvent, getPerson, getEvent } = require("../controllers/controllers.routes");

const router = Router();

router.get('/', inicio);
router.get('/ingreso', renderForm);

router.post('/ingresoPersona', insertPerson);
router.post('/ingresoEvento', insertEvent);

router.get('/persona/:id', getPerson)
router.get('/evento/:id', getEvent)

module.exports = router;