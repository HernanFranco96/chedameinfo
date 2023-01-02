const { Router } = require("express");
const { inicio, datos } = require("../controllers/controllers.routes");

const router = Router();

router.get('/', inicio);
router.post('/datos', datos);

module.exports = router;