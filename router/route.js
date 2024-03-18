const express = require('express');
const employeeController = require('../controller/controller')
const route = express.Router();

route.post('/post-data', employeeController.createEmployee);
route.get('/get-data', employeeController.getEmployee);

module.exports = route