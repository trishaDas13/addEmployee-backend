const employeeModel  = require('../model/model')

const createEmployee = async(req, res) => {

    try{
        const newEmployee = new employeeModel(req.body);
        const newlyInsertEmp = await newEmployee.save();
        res.json({
            success: true,
            message: "employee added successfully.",
          });
    }catch(err){
        res.status(400).json({
            success: false,
            message: "Something  went wrong!" 
        })
    }
}

const getEmployee = async(req, res) => {
    const employeeList = await  employeeModel.find({});
    res.json({
        success: true,
        message: "employee List Fetched from database",
        result: employeeList
    })
}


module.exports = {
    createEmployee,
    getEmployee
}