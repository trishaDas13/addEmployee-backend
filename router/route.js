const express = require('express');
const employeeController = require('../controller/controller')
const route = express.Router();

route.post('/post-data', employeeController.createEmployee);
route.get('/get-data', employeeController.getEmployee);
route.put('/edit-data', employeeController.editEmployee);
route.delete('/delete-data/:id', employeeController.deleteEmployee);


module.exports = route