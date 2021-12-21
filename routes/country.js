const express=require('express');
const router=express.Router();
const cors=require('cors');
router.use(cors());
router.use(express.json());
const mysql=require('mysql');


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

    db.query('INSERT INTO country (id,travelName,countryName,dateStart,dateEnd) VALUES(?,?,?,?,?)',
['chul0129','Europe',req.body.text,'2021-12-01','2021-12-31'],
(err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send('Values Inserted');
    }
    
}
);
});

router.get('/',(req,res)=>{

    db.query("SELECT * FROM country",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });

    console.log(req.body.text);
    res.send('user 화면');

});

module.exports=router;
