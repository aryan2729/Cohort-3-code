import { useState } from "react";

import { useFetch, usePostTitle } from "./hooks/useFetch";
// Importing useFetch & usePostTtle custom hook from ./hooks/useFetch file 


function App(){

  const[currentPost , setPost]=useState(1);


  const postTitle = usePostTitle();     // for postTitle thing 


  // Call the useFetch custom hook to get the post data
  const {finalData , loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);       // finalData stores json data & loading store boolean true or false 

  if(loading){

    return <>   
      
      <h4>Loading...</h4> 

    </> // fragment
  }


  return <div>

      <h1> {postTitle} </h1>


      <br />

      
      <button onClick={ ()=>setPost(1) }>1 </button>             {/* empty arrow func ( you can write above normal func also ) */}
      <button onClick={ ()=>setPost(2) }>2 </button>
      <button onClick={ ()=>setPost(3)}>3 </button>

      <p> {JSON.stringify(finalData)}</p>
      {/* Display the post data */}

  </div>
}

export default App;
