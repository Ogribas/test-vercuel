const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = [{
    tanggalSewa:"31/07/2024",
    pelanggan:"PT Arkaya Sutera",
    noHp:"6281363312349",
    alatSewa:"KESBOR EXC",
    qty:1,
    status:"Sedang Disewa",
    durasi: 3
  }];

app.get("/insertdata",(req,res)=>{
    res.json(data);
})

app.listen(3000,()=>{
    console.log(`App Listening on port:3000`)
})