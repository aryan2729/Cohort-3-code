/* IMP...
LocalStorage and SSR:
   - Next.js doesn't support localStorage in SSR because localStorage is a client-only feature.
   - Using localStorage to pass tokens results in a request where the server cannot identify the user during the initial page load.

Security Concern:
   - Sending tokens via localStorage and manually attaching them to headers is less secure compared to Next.js's built-in mechanisms like `next-auth`.

conclusion :
- Use `next-auth` or other authentication libraries designed for Next.js to handle token storage securely. */


import axios from "axios"


export default async function Profile(){

    const res = await axios.get("http://localhost:3000/api/profile", {
        
        headers : {
            // Using localStorage here is problematic because it's unavailable in SSR
            authorization : localStorage.getItem("token")
        }
    })

    const ProfilePicture = res.data.avatarUrl;

    
    return <div>
        {ProfilePicture}
    </div>
} 