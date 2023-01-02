const { Router } = require("express");
const { inicio, insertPerson, getPerson } = require("../controllers/controllers.routes");

const router = Router();

router.get('/', inicio);

router.get('/ingreso', getPerson)
router.post('/ingreso', insertPerson)

module.exports = router;