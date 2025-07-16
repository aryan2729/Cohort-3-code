// SSR 

import { getServerSession } from "next-auth";
// Importing the getServerSession function from 'next-auth' to fetch session data on the server side.

export default async function Home() {

  const session = await getServerSession();


  return (
    <div>

      {JSON.stringify(session)}

    </div>
  );
}


// Comparison:
// SSR: Fetches session data on the server, ensuring data is available during the initial page load, which improves SEO and initial rendering performance.
// CSR: Fetches session data dynamically in the browser, providing flexibility and responsiveness.




// CSR
// "use client"; 


// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// Importing functions and hooks from the 'next-auth/react' library.
// - SessionProvider: Wraps components to provide session data.
// - signIn: Function to initiate user sign-in.
// - signOut: Function to log the user out.
// - useSession: Hook to access session information (status, data).

// export default function Home() {

// The SessionProvider wraps RealHome to provide session context.

//   return (
//     <SessionProvider>
//       <RealHome/>
//     </SessionProvider>    
//   );
// }

// function RealHome() {


//   const session = useSession();


//   return (
//     <div>

//       {session.status === "authenticated" && <button onClick={() => signOut()}>Sign Out</button>}

//       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
//     </div>
//   );
// }
