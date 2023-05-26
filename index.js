const app = require('./app');
const express = require("express")

const { connectDatabase } = require('./config/database');


connectDatabase();

app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})