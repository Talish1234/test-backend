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



app.use(express.json());
app.use(cookieParser());

app.get("/cookie", (req,res) => {
  
    res.cookie("token1", "123341noefn243n", {
      
        maxAge: 1000 * 60 * 60 * 24 * 7
    }).status(200).json({
        success: true,
        error: false
    });
});

app.get('/getcookie',(req,res)=> {
    const val = req.cookies.token;
    const val2, = req.cookies.token1;
    res.json({val,val2});
},)

app.get('/*',(req,res)=> {
    res.json("working");
})
app.listen(3000, () => {
    console.log(`Server is running on port`);
  });