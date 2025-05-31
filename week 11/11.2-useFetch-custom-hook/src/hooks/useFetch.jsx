import { useState , useEffect } from "react";

// Create a custom hook called usePostTitle and export it from this module to be used in other components
export function usePostTitle(){


    const [post , setPost ] = useState({});       // empty object


    // Create an async function called getPosts that fetches the post data from the API and updates the post state variable with the response data
    async function  getPosts() {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();                                                     

        setPost(json);  // now post empty to json details store 
    }


    // Use the useEffect hook to call the getPosts function when the component mounts
    useEffect(()=> {

        getPosts();
    }, [] );        // Empty dependency array to ensure the effect runs only once (start)    


    return post.title;
}


// useFetch hook work same as above but useEffect changed thing , & it takes url by user in app.jsx file 
export function useFetch(url){
    
    const [finalData , setData] = useState({});             // empty object 
    const [loading , setLoading] =useState(true);           // Create a state variable called loading and a function to update it called setLoading to manage the loading state

    
    async function  getDetails() {

        setLoading(true);  // when data fetching it start
        
        const response = await fetch(url);
        const json = await response.json();         // this await very imp everytime cuz if it's data not convert into json and you stored that value then that empty thats y first await 

        setData(json);


        setLoading(false);      // when data fetched & stored then it false 
    }

    useEffect( () => {

        getDetails();
    } , [url]);  // Dependency array with the URL to ensure the effect runs when the URL changes 

    

    return {finalData , loading};

}