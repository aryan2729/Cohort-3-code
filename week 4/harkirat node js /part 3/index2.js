const express = require("express");
const app = express();

const users = [{           // array of obj
    name : "John",
    kidneys: [{
        healthy : false
    }]
}]; 

app.use(express.json());  

// Get - Post - Put - Delete 

// we wanna know how much kidneys have , healthy and unhealthy kidneys ?

app.get("/" , function(req, res){                       //🚀 if wanna input in get then from ( query )
    // how many kidneys user have 
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    // Using filter 🔥
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length ; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }

    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;   
    
    res.json({                      // res.send or res.json 
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})



app.post("/" , function(req , res){                 //🚀 if wanna input in post then from ( body ) | nd in post u can write the input in postman software 
    
    const isHealthy = req.body.isHealthy;           // requesting . body .ishealthy 
    users[0].kidneys.push({                         // pushing to above function 
        healthy : isHealthy
    })

    res.json({                                      // responding with json Done msg 
        msg :"Done"                                 
    })  
}) 


app.put("/" , function ( req , res){

    for ( let i = 0 ; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true;                 // we need to change every unhealthy kidney to healthy one 
    }
    res.json({
        // empty no need code for PUT 
    })

})

// Removing all unhealthy kidneys 
app.delete("/", function( req, res){
    const newKidneys = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if ( users[0].kidneys[i].healthy){
            newKidneys.push({                 // this will remove unhealthy kidneys 
                healthy : true 
            })

        }
    }
    users[0].kidneys = newKidneys;

    res.json({ msg : "Done "})
})


app.listen(3000);


// never forgot to add 
//       res.json({
//                  })