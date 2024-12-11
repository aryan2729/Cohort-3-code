//( npm init -y )to set up a new or existing npm package.

const express = require('express')                  // importing express library before that u've to install npm init -y and npm install express
const app = express()

// Route handlers
// Route
// GET method
app.get('/', function (req, res) {                     // Same as readFile in week 2 or 3
  res.send('Hello World');
})

app.post('/aryan' , function(req , res){        // req - all things related to the request and res - response
  res.send("Hello world from post endpoint ");
})

app.get('/asd', function(req , res){
  console.log("Hello from /asd");
})


app.listen(3000)  // which port do you want to listen

// if u want to run this write in terminal -> node index.js then go to browser and search localhost:3000 cuz port is 3000