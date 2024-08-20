const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const BASE = process.env.BASE;
app.use(cors({
    origin:BASE,
    credentials:true,
    exposedHeaders: ["token"] 
}))



app.use(express.json());
app.use(cookieParser());

app.get("/cookie", (req,res) => {
  
    res.cookie("token", "123341noefn243n", {
         secure: true,
         httpOnly:true,
         sameSite: 'None',
        partitioned: true,
        expires: new Date(Date.now() + 900000),
    }).status(200).json({
        success: true,
        error: false
    });
});

app.get('/getcookie',(req,res)=> {
    const val = req.cookies.token;
    
    res.json({val});
},)

app.get('/*',(req,res)=> {
    res.json("working");
})
app.listen(3000, () => {
    console.log(`Server is running on port`);
  });
