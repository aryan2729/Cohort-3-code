/* IMP...
This `page.tsx` file is used to handle (dynamic routes) for individual blog pages. 
-> example, if you access a URL like `/blog/1`, `/blog/2`, etc., but not /blog/1/2/3 
each of these URLs corresponds to a specific blog post.

The dynamic nature of the URL means that we don’t need to create a 
separate page for each individual blog post. Instead, by using
square brackets (`[]`) around the route parameter (e.g., `blogId`), 
we can make the route dynamic. This allows us to fetch the blog 
content for any given `blogId` dynamically without having to 
create separate pages for each blog post.
*/

import axios from "axios";


export default async function BlogPage({params} : any) {
    
    const postId = (await params ).blogId;   // should be same as what [blogId] folder you created | means [blogId] -> .blodId 

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`); //search that post blog/1 or blog/2  | instead of blogId write actual id like 1,2,3 etc
    const data = response.data;


    return <div>

        <h1>Blog Page</h1>

        title - {data.title}     <br/>
        
        body - {data.body } {/* Displaying the body of the blog post */}

    </div>
}
