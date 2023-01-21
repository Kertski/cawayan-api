const express = require('express')
const serverless = require('serverless-http')

const app = express();
const router = express.Router();

router.get("/",(req,res)=>{
    req.json({
        message:"Hosting nodejs backend successful !!"
    })
})

app.use('/.netlify/functions/api',router)

module.exports=app;
module.exports.handler = serverless(app)