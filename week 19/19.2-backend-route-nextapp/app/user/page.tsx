import axios from "axios";


export default async function user() {


    const response = await axios.get("http://localhost:3000/auth/api/v1/users/details");

    const data = response.data;
    
    // It's kind of impossible your loading file work cuz we're fetching data from same url not other url so it don't take time | In Next.js, adding a custom loading.tsx file inside a route shows a fallback UI during loading without hurting SEO, because it’s only shown on the client side after the initial server-rendered content. | 




    return <div>

    user details 
    <br />
    {data.name }
    <br />
    {data.email}


    
    </div>
}