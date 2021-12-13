const express = require("express");
const app = express();
const cors=require('cors');
app.use(cors());

app.get("/hi", function(req,res) {
	res.send("Welcome mini_proj web");
});

const PORT = 10000;
app.listen(PORT, function() {
    console.log("Server is ready at" + PORT);
});
