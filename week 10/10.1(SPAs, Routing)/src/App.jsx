import {BrowserRouter , Routes , Route , Link, useNavigate } from "react-router-dom";

// SPA ( single page application )-->🔥 A Single Page Application (SPA) in React is a web application that loads a single HTML page and then dynamically updates its content as the user interacts, without full page reloads.



{/*    <simple></simple>   ---> also written as <simple/>      */}


function App(){

  return <div>

    <BrowserRouter>                 {/* Wrap the routing inside BrowserRouter, which manages the routing history */}

    <Link to="/" >Allen</Link>      {/* Create navigation links using Link component to switch between pages without refreshing page */}
    <Link to="/neet/online-coaching-class-11" >Class 11</Link>
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

    <Routes>        {/*  stores all routes */ }
      <Route path="/" element={ <Landing/> } />          {/* Route for the landing page, mapped to the "/" path */}
      <Route path="/neet/online-coaching-class-11" element={<Class11Program/>} />     {/* Route for Class 11 NEET program page */}
      <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}  />
      <Route path="*" element={ <ErrorPage/> } />        {/* Route for handling unmatched paths, rendering a 404 error page ( means if you write wrong path it'll direct to this page ) */}
    </Routes>
    </BrowserRouter>

  </div>
}

function ErrorPage(){     // runs when you wrote wrong path instead of given above and * means every wrong path except given above 
  return(
    <div> <h1> 404 Page not found </h1></div>
  )
}

function Landing(){
  return <div>
     
     <h1> Welcome to allen </h1>

    
  </div>
}


function Class11Program(){
  return <div>
    <h2>Neet Programs for class 11th</h2>
  </div>
}


function Class12Program(){
  
  //useNavigate hook allows navigation within the component without reloading
  const navigate = useNavigate(); 

  function redirectUser(){      
    navigate("/");  // Navigate to the landing page("/" path)
  }

  
  return <div>

    <h2>Neet program for class 12</h2>

    <button onClick={redirectUser} >Click for back to Landing Page</button>
  
  </div>
}





export default App;