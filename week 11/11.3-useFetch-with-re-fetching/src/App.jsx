import { useState } from "react";
import { useFetch } from "./hooks/useFetch";



// useFetch with re-fetching means the data that stored in the site keep changing in 10 seconds so we call our getDetails function in hooks every 10 sec 

function App(){

  const[currentPost , setPost] = useState(1);

  const {data , loading } = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);

  if(loading){
    return <div> <h3>Loading...</h3></div>
  }

  

  return <div>

      <button onClick={() => setPost(1)}>1</button>
      <button onClick={() => setPost(2)}>2</button>
      <button onClick={() => setPost(3)}>3</button>

      <p> { JSON.stringify(data) }</p>

  </div>
}


export default App;