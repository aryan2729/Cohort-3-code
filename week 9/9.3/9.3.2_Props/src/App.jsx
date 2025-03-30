import { useState } from 'react'

function App() {

    return (

        // Apply inline styles to the div element
        <div style={ { backgroundColor: "#dfe6e9" , height: "100vh"}}>
            
            <div style={{ display: "flex" , justifyContent: "center"}}>

            <div>
                <div>
                    {/* Call PostComponent here with props to render it in the App component */}
                    <PostComponent
                        name={"Harkirat"}
                        followerCount={"20 followers"}
                        time={"20m ago"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP69xOgmObGqEMFMXmvfOa6-E6sA6g7kouJA&s"}
                        description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
                        />
                </div>
                    {/* Call PostComponent here with props to render it in the App component */}
                    <PostComponent
                        name={"Aryan"}
                        followerCount={"201 followers"}
                        time={"10m ago"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZsv-I7uvFqtdHz-TGoWCRr4RK0WYdbPNuw&s"}
                        description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap."}
                        />
                <div>
                    {/* Call PostComponent here with props to render it in the App component */}
                    <PostComponent
                        name={"Gomo"}
                        followerCount={"10 followers"}
                        time={"2m ago"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsw0qtamaBB3fpWwJ3NPrVr_tB3f7mXcogQ&s"}
                        description={"I just don't know how to get a job but still i work everyday and say to myself that's not over until i win ."}/>
                </div>
            </div>
        </div>
    </div>

    );
  
}

const style ={
    width : 250 ,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
}

// Create a function component named PostComponent ((🍁 with props )) to render it in the App component
function PostComponent({name , followerCount , time , image , description }){
    
    return(
        <div style={style}>

        {/* display the name, followerCount, time, image, and description using 🍁--> props */}
        <div style={{display: "flex"}}>
            <img src={image}  style={ { width: 40 , height: 40 , borderRadius: 40} }/>
            <div style={{ fontSize: 14, marginLeft: 10}}>
                <b>{name}</b>
                <div>{followerCount}</div>
                <div>{time}</div>
            </div>
        </div>

        <div style={{ fontSize: 14 }}>{description}</div>

        </div>
    );
}


export default App
