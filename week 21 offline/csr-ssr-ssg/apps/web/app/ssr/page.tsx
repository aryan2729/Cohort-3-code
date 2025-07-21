// 🔁 SSR-enabled version
export const dynamic = 'force-dynamic';

export default async function ssr(){

    // so now it don't stored in cache while building so user get fresh content 
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{
        cache : 'no-store'  // ⚠️ disables caching
    })   
    const todos = await res.json();

    

    return <div>

        {todos.map((todo : any)=> (<div>

            {todo.title}
            {todo.id}
            
            </div>
            ))}


    </div>
}