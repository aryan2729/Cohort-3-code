/* IMP...
The `[...postId]` syntax is used in the dynamic routing of Next.js. 
This allows handling routes like `localhost:3000/post/_/_/ infinite/` where anything after `/post/` 
(e.g. 1/2, 2/3, 3/4, 4/5, rohan) will be captured and handled dynamically.
The captured values are available as `params.postId` in the component. 
This is particularly useful for creating pages that (accept multiple levels of dynamic paths.) just like post/4/20/245/1 here video stored and inner/ is folder inside folder
*/

export default function Page({params } : any ){  // This function component takes `params` as a prop, which can contain various dynamic parameters.

    const postId = params.postId;       // .postId should be same as whatever you write in [...postId] thing ok 


    return <div>
    Hi there from post wala page now write post/2/4/5/6/ etc /? it shows this page | it's used for go folder inside folder inside folder inside video present

    <br/>

    {JSON.stringify(postId)}
    </div>
}