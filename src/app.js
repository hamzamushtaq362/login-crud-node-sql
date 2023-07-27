const express = require('express');
const mysqlfunc = require('./helper/db-connect');
const cors = require("cors");
require("dotenv").config("../.env");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
var db = mysqlfunc()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const authRoutes = require('./routes/auth.route');

app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'I am working'
    })
});

app.use('/api',authRoutes);

app.listen(port,()=>{
    console.log(`Express is listening at http://localhost:${port}`)
})