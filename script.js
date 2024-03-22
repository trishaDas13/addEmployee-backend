const express = require('express');
const mongoose = require('mongoose')
const employeeRoute = require('./router/route');
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors({
    origin:"https://employee-dashboard-murex.vercel.app/"
}));
// mongodb://127.0.0.1:27017/addEmployee
// 
//todo: connect mongoDB here ...
mongoose.connect("mongodb+srv://Trisha:DapBhWPyZwI471R1@cluster0.oaywa5b.mongodb.net/")
.then(()=>console.log('Connected to Mongo DB'))
.catch((error)=>console.log('Failed to Connect'));

//todo: API middleware
app.use('/dashboard/employee', employeeRoute);

//todo: listen port
app.listen(10000, () => {
    console.log('server is up and running at port 10000')
})