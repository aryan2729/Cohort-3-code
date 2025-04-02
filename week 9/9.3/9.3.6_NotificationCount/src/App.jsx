import {useState} from "react";

function App(){

const [count , setCount] = useState(1);

function increaseCount(){
  setCount(count+1);
}

  return( <div>

      <div style={{ display: "flex"}}>
        <div style={{background:"grey" , borderRadius:20 , width:25 , height:25 , paddingLeft:10 , paddingTop:5}}>
        {count}
        </div>
      </div>
      <img  src={"https://static-00.iconduck.com/assets.00/notification-icon-462x512-tqwyit2p.png"} style={{cursor:"pointer" }} width={40}/>
      <button onClick={increaseCount}> Increase </button>
  </div>)
}


export default App;