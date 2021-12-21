const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const axios=require('axios');
const bodyparser=require('body-parser');
const user=require('./routes/user');
const country=require('./routes/country');
const travel=require('./routes/travel');


app.use('/user',user);
app.use('/country',country);
app.use('/travel',travel);
app.use(cors());
app.use(express.json());




//create connection

const db=mysql.createConnection({
  host: "travel-project.clzbzgdwjz4i.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "drims2021!",
  database: "travelbudget"
});
//conect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('mysql connected');
})

/*
db.query('INSERT INTO user (id,name,birth,email,password) VALUES(?,?,?,?,?)',
['chul0129','윤철','960129','jason@drimaes.com','1234'],
(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Values Inserted');
    }
    
}
);
*/



app.listen('3000',()=>{
    console.log('server start on port 3000');
    
})
