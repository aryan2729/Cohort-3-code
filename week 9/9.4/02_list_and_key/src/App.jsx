import React  from "react";

const App = () =>{

  return(

    <div>

      {/* list and key(helps to unique like id )  */}
      {[                
          <Todo key ={1} title={"Go to gym"} done={false}/> ,
          <Todo key ={2}  title={"Complete work"} done={true}/>
      ]}
    </div>
  );
};

function Todo({title , done}){

  return (

    <div>

      {title} - { done ? "Done!" : "Not Done!"}

    </div>

// (Error boundary)
// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
// Error boundaries only exist in class based components


  );
};


export default App;