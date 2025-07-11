import axios from "axios";

// ssr -> server side rendering 

export default async function User(){       // async function usez


    const response  = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"); // no need of useEffect if you do then it won't use nextjs plus point 


    const data = response.data;

    // You only need to show loader in other pages not landing page if you do in landing page then it's not work as SEO optimized and google won't rank your website in top acc. to what content you added in landing page | crawler search that thing and it'll find only loader not other things ok  
    
    // In Next.js, adding a custom loading.tsx file inside a route shows a fallback UI during loading without hurting SEO, because it’s only shown on the client side after the initial server-rendered content. | it still is ssr 

    await new Promise( r => setTimeout(r , 3000 ));     // Sleep for 3 second then it shows contents to users 



    return <div>
    User page

    <br/>
    {data.name}
    <br/>
    {data.email}

    </div>
}