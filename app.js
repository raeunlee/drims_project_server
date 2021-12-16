const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const axios=require('axios');

const user=require('./routes/user');
const res = require('express/lib/response');

app.use('/user',user);

app.use(cors());
app.use(express.json());

app.get("/hi", function(req,res) {
        res.send("hihi");
});

//create connection
/*
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'2915',
    database: 'tripbudget'
});
*/

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
app.post('/create', (req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const date_start=req.body.date_start
    const date_end=req.body.date_end
    const money=req.body.money  
    
    db.query('INSERT INTO travel (id,name,date_start,date_end,money) VALUES(?,?,?,?,?)',
    [id,name,date_start,date_end,money],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Values Inserted');
        }
        
    }
    );

});

app.get('/travel', (req,res) => {
    db.query("SELECT * FROM travel", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
            })
})

app.listen('3000',()=>{
    console.log('server start on port 3000');
    
})