const express=require('express')
const app=express()
const {connectToDb,getDb}=require('./db')


//connecting db
let db
connectToDb((err)=>{
    if(!err)
    {
        app.get('/book',(req,res)=>
        {
            res.status(200).json({
                messg:'welcome to the api'
            })
        })
        db=getDb()
    }
})


// app.get('/:kumar/:id/:name',(req,res)=>
// {
//     const id=req.params.id;
//     const kumar=req.params.kumar
//     const name=req.params.name
//     res.status(200).json({
//         messg:"welcome "+id+name+"."+kumar
//     })
// })


app.listen(3000,()=>
{
    console.log('server start')
})
//
