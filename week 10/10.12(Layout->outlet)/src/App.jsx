import { BrowserRouter , Routes , Route , Link , useNavigate , Outlet } from "react-router-dom";

// Outlet means any route 

function App(){

    return <div>

    <BrowserRouter>
    <Routes>
    
        {/* Define a layout route to include a common layout structure (nav, footer) for all child routes */}
        <Route path="/"  element={ <Layout/> }/> 

            <Route path="/" element={ <Landing/>} />       
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="*"  element={ <Errorpage/> } />

    </Routes>
    </BrowserRouter>

    </div>
}

// Function component that serves as a layout wrapper containing navigation, content, and footer

function Layout(){                                                      // 100vh full screen ( 90vh means 90% screen)

    return <div style={{height:"100vh"}}>  
    

            <nav style={{background:"yellow"}}>                  {/* Navigation section with links to different routes */}
                <Link to="/">Allen</Link>
                <Link to="/neet/online-coaching-class-11">Class 11</Link>
                <Link to="/neet/online-coaching-class-12">Class 12</Link>
            </nav>

            

            <div style={{height:"90vh", background:"grey"}}>
                <Outlet/>                                              {/* Outlet means every route can come here  */}
            </div>

            <footer style={{background:"yellow" }}>Footer | Contact Us </footer>

    </div>
}



function Landing(){

    return <div style={{color:"blue"}}>
                <h1>Welcome to Allen</h1>
            </div>
}


function Errorpage(){
    return(
        <div>
            <h1>404 Page not found</h1>
        </div>
    );
}


function Class11Program(){
    return <div>
        <h1>Neet practise paper for class 11</h1>
    </div>
}


function Class12Program(){

    const navigate = useNavigate();

    function goTOHome(){
        navigate("/");            // everytime you click on below button it comes to home page 
    }



    return <div>
        <h1>Neet practise paper for class 12</h1>

        <button onClick={goTOHome}>click here for go to home </button>

    </div>
}

export default App;