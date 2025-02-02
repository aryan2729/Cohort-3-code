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
                        subtitle={"20 followers"}
                        time={"20m ago"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP69xOgmObGqEMFMXmvfOa6-E6sA6g7kouJA&s"}
                        description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
                        />
                </div>
                    {/* Call PostComponent here with props to render it in the App component */}
                    <PostComponent
                        name={"Aryan"}
                        subtitle={"Promoted"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZsv-I7uvFqtdHz-TGoWCRr4RK0WYdbPNuw&s"}
                        description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap."}
                        />
                
            </div>
        </div>
    </div>

    );
  
}

const style ={
    width : 280 ,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
}

// Create a function component named PostComponent ((with props )) to render it in the App component
function PostComponent({name , subtitle , time , image , description }){
    
    return(
        <div style={style}>

        {/* display the name, followerCount, time, image, and description using --> props */}
        <div style={{display: "flex"}}>
            <img src={image}  style={ { width: 40 , height: 40 , borderRadius: 40} }/>
            <div style={{ fontSize: 14, marginLeft: 10}}>
                <b>{name}</b>
                <div>{subtitle}</div>

              { time != undefined && <div style={{ display:"flex"}}>        {/* 🍁🍁  Conditional rendering ->  {statement && code }  this means if statement true or work then run only code otherwise not run code  */}
                <div>{time}</div>
                <img src="data:image/png;base64,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" style={{ width: 16 , height:16 , paddingTop: 3}} />
              </div> } 

            </div>
        </div>

        <div style={{ fontSize: 14 }}>{description}</div>

        </div>
    );
}


export default App
