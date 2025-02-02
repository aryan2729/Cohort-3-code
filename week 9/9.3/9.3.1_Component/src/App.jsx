import { useState } from 'react'

function App(){       // App is component 

  
  return(
  <div style={{background:"#dfe6e9" , height: "100vh"   }}>

    <div style={{ display :"flex" , justifyContent: "center" }}>
      <div>
        <div>
         <PostComponent/>               {/* // render  */}
        </div> <br />           
        <div>   
          <PostComponent/> 
        </div>  <br />                                 {/* we can render PostComponent multiples times that y react used  */}
        <div>
          <PostComponent/>
         </div>       <br />    
      </div>
    </div> 
    </div>
  )
}


//🍁 Instead of backgound-color -> write backgroundColor just remove - and capital next character
const style = { width: 280 , backgroundColor: "white" , borderRadius: 10 , borderColour: "gray" , borderWidth: 1 , padding : 20 }

function PostComponent(){

  return <div style={style}>
  <div style={{ display : "flex"}}>          
    <img src="https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_400x400.jpg" 
      style={{ 
      width: 50 ,
      height:50 ,
      borderRadius: 20 }} />            {/* everything under {} & if wan syle two ways 1st like above make style vribale then add {style} and 2nd style at that place style={{ width: 5  }}  double curly brackets*/}
  <div>
    <div style={{ fontSize: 17 , marginLeft: 10}}>
      <b>
        100xdevs
      </b>
      <div>22,800 Followers</div>
      <div>12m</div>
    </div>
  </div>
  </div> 
  <div style={{ fontSize: 17 }}>
      Want you to know how to win big? check out these folks won $6000 bounty 
  </div>

  </div>
  

  
}


export default App
