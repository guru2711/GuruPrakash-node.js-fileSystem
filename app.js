const express = require("express")
const getRoutes = require("../zentask-timestamp/Routes/get.routes")
const app = express()


// 
async function load(){
    try{
        app.use(express.json())

        app.use("/", getRoutes)

        // starting the server with port name
app.listen(1000,()=> console.log("server is running"))
    }catch(err){
        console.log("error starting server: ",err)
    }
}
load()