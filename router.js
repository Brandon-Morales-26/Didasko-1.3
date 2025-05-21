const express =  require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index.ejs");
})

router.get("/acerca_de_didasko",(req,res)=>{
    res.render("about.ejs");
})

router.get("/productos",(req,res)=>{
    res.render("products.ejs");
})

module.exports = router;