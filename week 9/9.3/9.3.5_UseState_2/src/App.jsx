import { useState } from 'react'
import { PostComponent } from './Post';


function App() {

const [ posts , setPosts] = useState([]);    // posts is empty array which stores all pots and add more posts 



const postComponents = posts.map(post => <PostComponent
    name = {post.name}
    subtitle={post.subtitle}
    time={post.time}
    description={post.description}
    />)


function addPost(){

    // setposts  in this->...posts + , new posts also at end
    setPosts([...posts , {                  //🔥 array of posts so you can add more post like in your linkedin ( don't add {} for array )
        name: "Harkirat",
        subtitle: "20 followers",
        time: "20m ago",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsw0qtamaBB3fpWwJ3NPrVr_tB3f7mXcogQ&s",
        description: "What to know how to win big? Check out how these folks won $6000 in bounties."    
    }])
   

}

    return (


        <div style={ { backgroundColor: "#dfe6e9" , height: "100vh"}}>
            <button onClick={addPost}>Add Post</button>
                <div style={{ display : "flex" , justifyContent: "center"}}>
                    <div>
                    {postComponents}
                    </div>
            </div>
        </div>
    );
}




export default App


