const express=require('express')
const app=express();
app.use(express.json());

const mongoose=require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const Brand=require('./model')
let Brandname=require('./model')



mongoose.connect('mongodb+srv://Kumar:Kumar%409113@cluster0.bprqnop.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1} 
).then(()=>
{
    console.log('db connecct')
}).catch(err=>console.log(err))


//ADD OPERATING
app.post('/addbrands',async(req,res)=>
{
    const brand=new Brand(
    {
         brandname:req.body.brandname,
         date:req.body.date,
         location:req.body.location
    })

    try{
         const newData=await brand.save()
       
         return res.json(Brandname.find());
        }
    catch(err)
    {
        console.log(err.message)
    }
})

/// SHOW ALL ITEMS

app.get('/getallbrands',async(req,res)=>
{
    try{
        const alldata=await Brandname.find();
        return res.json(alldata)

    }
    catch(err)
    {
        console.log(err.message);
    }
})

//GET ITEM WITH ID

app.get('/getallbrands/:id',async (req,res)=>
{
    try{
        const data=await Brandname.findById(req.params.id)
        return res.json(data);

    }
    catch(err)
    {
        console.log(err.message)
    }

})

//DELETE OPERATIN

app.delete('/deletebrand/:id',async(req,res)=>
{
    try{
        await Brandname.findByIdAndDelete(req.params.id)
        return res.json(await Brandname.find());

    }
    catch(err)
    {
        console.log(err.message)
    }
})

app.listen(9000,()=>
{
    console.log('server start');
})

