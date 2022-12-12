const express = require('express')


require('dotenv').config({path:"./config.env"});
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server Request")
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:4000`); 
})