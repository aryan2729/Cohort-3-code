//This is SSG means it's build at starting and when user reach this page then it asap send the exact same thing that it get in build time {not expensive , fast}

export default async function(){

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const todos = await res.json();       // it's hardcoded the response to 1 response cuz it's only get fetching at build time and when user visit it won't fetch again data it just show  already fetched data that done in build time asap fast           


    return <div>

        {todos.map((todo : any)=> <div>

            {todo.id}
            {todo.title}

            </div>
            )}
        

    </div>
}