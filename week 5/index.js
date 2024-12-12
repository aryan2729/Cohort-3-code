const express = require("express");
const app = express();


app.get("/sum" , function( req , res){

    // const a = req.query.a ;                  //🔥 In js req.query.a = work as string so we need to pass -> parseInt(req.query.a)   then it work as integer it only when adding               
    // const b = req.query.b;
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({                                 
        ans : a + b 
    })
})

app.get("/multiply" , function(req, res){

    const a = req.query.a ;                      // input asking from user a & b --> /?a=3&b=4   
    const b = req.query.b ;

    res.json({
        ans : a * b                             // responding  with a * b (json no ;)
    })
})

app.get("/divide" , function(req, res){

    const a = req.query.a ;
    const b = req.query.b ;

    res.json({
        ans : a / b 
    })
})

app.get("/subtract" , function(req, res){

    const a = req.query.a ;
    const b = req.query.b ;

    res.json({
        ans : a - b 
    })
})





//🚀 If u wanna input in /sum/a/b way = /sum/a/b instead of /sum?a=_&b=_ 

app.get("/inputInDiffWay/:a/:b", function(req, res){    // add /sum/:a/:b 

    const a = parseInt( req.params.a );                    // params use instead of query in that thing if we really wanna input in sum/2/3 way 
    const b = parseInt( req.params.b );                  // parseInt cuz in addition it takes as string in js | in other things sub , divide etc no need of parseInt

    res.json({
        ans : a + b 
    })
})


app.listen(3000);