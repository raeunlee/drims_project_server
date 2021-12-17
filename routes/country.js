const express=require('express');
const router=express.Router();
const cors=require('cors');
router.use(cors());
router.use(express.json());

router.post("/",(req,res)=>{

    console.log(req.body.text);
});

router.get('/',(req,res)=>{
    console.log(req.body.text);
    res.send('user 화면');
});

module.exports=router;