require('dotenv').config()
const cors = require('cors')
const admin = require('firebase-admin');
const express=require('express')

const router =require('./router') 


const serviceAccount = require("./service_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://auth-2dacd-default-rtdb.europe-west1.firebasedatabase.app"
});

const app=express()

app.use(express.json())
app.use(cors())
app.use('/email-checker',router)


app.listen(3005,()=>{
    console.log('server is running')
})

