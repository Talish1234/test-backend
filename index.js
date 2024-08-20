const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const BASE = process.env.BASE;


app.use(cors({
    origin:BASE,
    credentials:true
}))



app.use(cookieParser());
app.use(express.json());

app.get("/cookie", (req,res) => {
   const token = "varchar2";
    res.cookie("access_token", token, {
        maxAge: 90 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure:true,
        sameSite: "none",
        secure: true,
    })
        .status(200)
        .json({
        success: true,
        error: false
    });
    /*
    res.cookie("token", "123341noefn243n", {
         secure: true,
         httpOnly:false,
         sameSite: 'None',
        partitioned: true,
        expires: new Date(Date.now() + 900000),
    }).status(200).json();*/
});
app.get('/getcookie',(req,res)=> {
    const val = req.cookies.access_token;
    
    res.json({val});
})

app.get('/*',(req,res)=> {
    res.json("working");
})
app.listen(3000, () => {
    console.log(`Server is running on port`);
  });
