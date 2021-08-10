const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('./db.js');
const routes=require('./routes/routes.js')
const app=express();

app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>{
    console.log("server is runing at http://localhost:3000");
});

// get put post delete;
app.use('/employees',routes);