import { useState } from "react";


// Fragment
// In React, a component can return a single parent element, 
// but it can contain multiple children within that single parent


function trial(){

  return    //<div></div>       you can't do this keep in mind okk cuz in react it returns only 1 parent ( it can have mupltile childs but only 1 parent)
            //<div></div>


}


function p(){

  // return (
  //           // <div></div>   you also can't do this only one parent 
  //           // <div></div>  
  // );
}

function ys(){
  return
      <div>     // this works 
          <div></div>
          <div></div>
      </div>

}



// Fragment 

function App(){

  return                   // <> </>  -> this is called fragment work same as one parent div
              <>         
              <div></div>
              <div></div>
              </>
}
