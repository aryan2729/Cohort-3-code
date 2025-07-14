/* IMP.. 
why we created (auth) -> when we wanna go to url  just skip the (auth)
name but why we're still don't add auth/signup instead add /signup it 
using this cuz if someone wanna add layout like HEADER & FOOTER only
for signup and signin page not on other pages so you create layout.tsx
in (auth) and write layout in it | you don't want layout applied to all
pages so thats y we're not writing in app folder layout cuz that was 
main layout that applies to all pages  */


import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode }) {

    // children is prop of layout and it's type is reactNode so whatever pages come in this auth folder inner folders only not outer folders it shows in children place 

    return <div>

        <div>Header</div>

            {children}

        <div>Footer</div>


    </div>
}