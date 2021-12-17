const express=require('express');
const router=express.Router();
const cors=require('cors');
router.use(cors());
router.use(express.json());



router.post("/",(req,res)=>{
    console.log(req.body.travel);
    console.log(req.body.money);
    console.log(req.body);
});

router.get('/',(req,res)=>{
    res.send(req.body.travel);
    res.send(req.body.money);
});

module.exports=router;