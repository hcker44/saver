const express=require('express') ;
const app= express();
require('dotenv').config();
const send=require('./Routes/SendMail');
const PORT=process.env.PORT || 4000;
app.use(express.json()) ;
app.use('/api/mail',send);
app.use('/',(req,res)=>{
    res.send("hello");
})



app.listen(PORT,()=>{
    console.log("App is running")
})