const express=require('express');
const router=express.Router();
const cors=require('cors');

router.use(cors());

router.get('/',(req,res)=>{
    res.send('user 화면');
});

module.exports=router;