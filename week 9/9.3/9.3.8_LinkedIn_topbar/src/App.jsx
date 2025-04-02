import { useState , useEffect } from "react";


//🔥 M.I. if else ( in Conditional Operator )
// --> (let result == num ? "Positive" : "Negative";)   // ?  true : false work   | and keep in mind fetch returns promise so u need to use .then after you fetched data 


function App(){

  const [currentTab , setCurrentTab] = useState(1);
  const [tabData , setTabData] = useState({});  // for data store after fetching 
  const [loading , setLoading] = useState(true);  // for adding loading sign while fetchind data from backend 


  useEffect(function(){

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+ currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });
  } , [currentTab]);    // whenever currenTab changes fetching data work | if you don't add anything in dependency then it only run when mount( means at start )


  return <div>    
  
  {/* y we used function in onclick cuz we want to change currentTab by useState that's y we can't use this without func */}
  
      <button onClick={function(){setCurrentTab(1)}} style={{ color : currentTab==1 ? "red" : "black"}}>          {/* setCurrentTab(1) same as setCurrentTab(currentTab == 1)   */}
        Todo#1
      </button>
      <button onClick={function(){setCurrentTab(2)}} style={{ color : currentTab==2 ? "red" : "black"}}>
        Todo#2
      </button>
      <button onClick={function(){setCurrentTab(3)}} style={{ color : currentTab==3 ? "red" : "black"}}>
        Todo#3
      </button>
      <button onClick={function(){setCurrentTab(4)}} style={{ color : currentTab==4 ? "red" : "black"}}>
        Todo#4
      </button>
      <br></br>
      {/* we need to use here also conditional operator  */}

       { loading ? "Loading.." : tabData.title }         {/*  if loading is true then loading string shows if not then tabData.title shows and title is taken from backend server  */}
  </div>
}


export default App