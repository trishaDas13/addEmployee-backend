const mongoose = require('mongoose');

const employeeScheema = {
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    department:{
        type: String,
        require: true
    },
    designation:{
        type: String,
        require: true
    },
    dateOfJoining:{
        type: String,
        require: true
    },
    salary:{
        type: String,
        require: true
    }
}

const Employee = mongoose.model('Employee',employeeScheema);
module.exports = Employee;
