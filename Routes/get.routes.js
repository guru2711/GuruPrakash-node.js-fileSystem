const express = require("express")
const app = express.Router()
const {readFileSync,writeFileSync} = require("fs")


const date = Math.floor(Date.now()/1000)
writeFileSync("./date-time.txt",`Here is the TimeStamp: ${date}`)
const first = readFileSync("./date-time.txt","utf-8")

app.get("/",(req,res)=>{
    res.send(`${first}`)
})

module.exports = app
