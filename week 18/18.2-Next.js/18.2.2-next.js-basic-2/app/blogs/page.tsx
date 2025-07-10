import axios from "axios";


async function getBlogs() {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");

    return response.data;
}


export default async function Blogs() {
    
    const blogs : any = await getBlogs();

    return <div>

        {blogs.map((blog : iTodo) => <Todo completed={blog.completed} title={blog.title}  /> )}        {/* ✅ .map() is used to loop through an array and create a new array with whatever you return from each item. */} 
    </div>
}


interface iTodo {
    title : string ;
    completed : boolean;
}

function Todo({completed , title} : iTodo){     

    return <div>
        {title } {completed ? "Done " : "not done"}
    </div>
    
}