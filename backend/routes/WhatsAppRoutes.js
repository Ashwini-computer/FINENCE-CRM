const { Router } = require("express");
const { sendofferMessage, bulkwhatsappMessage } = require("../controllers/WhatsappControllers");

const router=Router();

router.post('/offers',sendofferMessage);
router.post('/bulk',bulkwhatsappMessage);

module.exports = router;