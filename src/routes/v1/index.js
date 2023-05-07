const express = require('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const cityController = new CityController();


router.post('/createCity', cityController.create);
router.get('/getCity/:id', cityController.get);

module.exports=router

