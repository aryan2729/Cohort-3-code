// This route takes all auth/....all 
// create all routes 

import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";      
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({

    providers: [        // array of providers like apple , google etc 

        CredentialsProvider({

          name: "Email",        //jo yaha likh rhe hia woh likha ayega front mai jaise iske liye ayega ki Sign in with email.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Type your username here !" },
            password: { label: "Password", type: "password",  placeholder:" Enter your password here !"}
          },

          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            console.log(username, password);
            

            //db request to check if the username and password are correct basically the authentication part!
            const user = { 
                id: "1", 
                name: "Aryan", 
                email: "aryan@gmail.com" 
            }
      
            if (user) {
              return user
            } else {
              return null;
            }
          }
        }),
        
        GoogleProvider({            //yeh google wla sign ka method daal dega like sign in with google 
            clientId: "ABC",
            clientSecret: "ABC"
          })


      ],

      secret: process.env.NEXTAUTH_SECRET,      // don't need to import dotenv in nextjs
      
})

export {handler as GET, handler as POST}    // export as GET & POST 

//ispe yeh next-auth install krnge na yeh khudh ek front bna kr dega ..jispe help krega ki jo credentials provide krnge us hisb ka woh frontend ka bana dega.. jitne credentials add krnge tb unka !