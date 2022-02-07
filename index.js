const express = require('express')
const app = express()
const port = 3007
require('./db/connector')
const details = require('./models/Emp')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World! this is very nice')
})

app.post('/api/emp', async (req,res)=>{
    try {
        const add = new details(req.body)
        const savedt = await add.save()
        res.status(201).send(savedt)
        console.log("data transfered to database")
    } catch (e){
        res.status(400).send(e)
        console.log("transfer failed")
    }
})


app.get("/api/emp", async (req,res)=>{
    try {
        const getdata = await details.find()
        res.status(201).send(getdata)
        console.log("Data fetch successfull")
    } catch (e){
        res.status(400).send(e)
        console.log("invalid Response")
    }
})

app.get("/api/emp/:id", async (req,res)=>{
    try {
        const ids = req.params.id
        const indivisual = await details.findById(ids)
        res.status(201).send(indivisual)
    } catch (e) {
        res.status(404).send(e)
        console.log("intenal server error")
    }
})

app.patch("/api/emp/:id", async (req,res)=>{
    try {
        const eid = req.params.id
        const update = await details.findByIdAndUpdate(eid , req.body)
        res.status(201).send(update)
        console.log("data Updated successfully")
    } catch (e) {
        console.log(e)  
        // res.status(500).send(e)
          
    }
})

app.delete('/api/emp/:id', async (req,res)=>{
    try {
        const eid = req.params.id
        const deletes = await details.findByIdAndDelete(eid)
        res.status(201).send(deletes)
        console.log("deleted successfully");
    } catch (e) {
        res.status(500).send(e)
        console.log("failed");
        
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

