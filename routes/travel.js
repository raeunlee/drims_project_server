const express=require('express');
const router=express.Router();
const cors=require('cors');
router.use(cors());
router.use(express.json());

const mysql=require('mysql');
const moment=require('moment');

const db=mysql.createConnection({
    host: "travel-project.clzbzgdwjz4i.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "drims2021!",
    database: "travelbudget"
  });
  //conect
  /*
  db.connect((err)=>{
      if(err){
          throw err;
      }
      console.log('mysql connected');
  })
*/
router.post("/",(req,res)=>{
    
    const travelName=req.body.travel;
    const dateStart=req.body.date;
    const dateEnd=req.body.date2;
    const totalMoney=req.body.money;
    
    let sub1=dateStart.substr(0,10);
    let sub2=dateEnd.substr(0,10);
    
    const start=moment(sub1,"YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD');
    const end=moment(sub2,"YYYY-MM-DD").add(1,'days').format('YYYY-MM-DD');
    
    db.query('INSERT INTO travel (id,travelName,dateStart,dateEnd,totalMoney) VALUES(?,?,?,?,?)',
    ['chul0129',travelName,start,end,totalMoney],
    (err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send('Values Inserted');
    }
    
}
);
});
/*
router.post("/",(req,res)=>{
    console.log(req.body.travel);


    const travelName=req.body.travel;
    const dateStart=req.body.date;
    const dateEnd=req.body.date2;
    const totalMoney=req.body.money;
    
    db.query('INSERT INTO travel (id,travelName,dateStart,dateEnd,totalMoney) VALUES(?,?,?,?,?)',
    ['chul0129',travelName,dateStart,dateEnd,totalMoney],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Values Inserted');
        }
        
    }
    );
    
});

*/
router.get('/',(req,res)=>{
    res.send(' 화면');






module.exports=router;
