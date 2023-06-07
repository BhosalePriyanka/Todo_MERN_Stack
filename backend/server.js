const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const ITEM = require('./model/itemModel')

//middleware
app.use(cors())
app.use(express.json())

app.get('/api',async(req,res)=>{
    const Item = await ITEM.find({})
    res.send(Item)
})

app.post('/api', async(req,res)=>{
    const item = req.body
    try{
    const itemDetails = await ITEM.create(item)
    res.json(itemDetails)
    }
    catch(error){
        res.json({error:error.message})
    }
    
})
app.delete('/api:id', async(req,res)=>{
    try{
    const {id} = req.params
   
    const del = await ITEM.findOneAndDelete({_id:id})
    
    res.json(del)
    }
    catch(error){
    res.json({error:error.message})
    }
    
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
app.listen(process.env.PORT,()=>{
console.log('Connected')
})
})


