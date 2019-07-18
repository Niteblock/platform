const express = require("express");
const router = express.Router();

const deviceController = require("../Controllers/DeviceController")
const dataController = require("../Controllers/DataController")

router.post("/save-data", dataController.saveData)
router.post("/create-device", deviceController.createDevice)

router.get("/list-devices", deviceController.listDevices)
router.get("/find-by-id", deviceController.findById)
router.get("/data-by-device", dataController.getDeviceData)

router.put("/test-put", deviceController.updateDeviceStatus)
module.exports = router