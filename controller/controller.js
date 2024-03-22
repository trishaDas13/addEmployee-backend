const employeeModel = require("../model/model");

const createEmployee = async (req, res) => {
  try {
    const newEmployee = new employeeModel(req.body);
    const newlyInsertEmp = await newEmployee.save();
    res.json({
      success: true,
      message: "employee added successfully.",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after some time",
    });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employeeList = await employeeModel.find({});
    res.json({
      success: true,
      message: "employee List Fetched from database",
      result: employeeList,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after some time",
    });
  }
};

const editEmployee = async (req, res) => {
  try {
    await employeeModel.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: req.body,
      }
    );
    res.json({
      success: true,
      message: "updated the data about employee",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after some time.",
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    console.log('first', req.params.id) 
    await employeeModel.deleteOne({ _id: req.params.id });
    res.json({
      success: true,
      message: "Successfully deleted the employee",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after some time",
    });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
};
