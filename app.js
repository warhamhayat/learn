const express = require ("express");
const app = express();


app.use(express.static(__dirname));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/" + "src/index.html")
});

app.listen(8080, function(){
    console.log(" its working")
})

