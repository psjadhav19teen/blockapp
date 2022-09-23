const express=require('express');
const b=express();
b.get('/',(req,res)=>res.send("welcome"));
b.listen('1000',()=>console.log('server started at 1000'));