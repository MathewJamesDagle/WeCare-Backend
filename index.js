require('dotenv').config();
const cors = require('cors')
const express = require('express');
const {connection} = require("./db/dbconnection")
const loginRoutes = require("./routes/login-routes");
const registerRoutes = require("./routes/register-routes");
const barangayRoutes = require("./routes/barangay-routes");
const experienceRoutes = require("./routes/experience-routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/main",loginRoutes);
app.use("/main",registerRoutes)
app.use("/main",barangayRoutes)
app.use("/main",experienceRoutes)

connection.addListener('error', (err) => {
    console.log("error")
    console.log(err)
    if(!err){
        console.log("Connection successful")
    }
  });

app.listen(3000,()=>{
    console.log(`Naminaw ni cya sa port 3000`)
});