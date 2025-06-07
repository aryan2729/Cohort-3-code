// Import the RecoilRoot and useRecoilValueLoadable hooks from the 'recoil' package
import { RecoilRoot, useRecoilValueLoadable , useRecoilStateLoadable } from "recoil";

// Import the atom family to manage state for individual todos
import { todosAtomFamily } from "./atoms";


function App() {

    return (


        <RecoilRoot>
            {/* Render multiple Todo components with different IDs */}
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />
        </RecoilRoot>
    );
}



function Todo({ id }) {

    // Get the todo value from the Recoil state using the useRecoilValueLoadable hook
    const todo = useRecoilValueLoadable(todosAtomFamily(id));
    // const [todo , setTodo] = useRecoilStateLoadable(todosAtomFamily(id;))

    if (todo.state === "loading") {      // Check if the todo is loading

        return <p>Loading...</p>;

    } else if (todo.state === "hasError") {          // Return an error message if there was an error fetching the todo

        return <p>Error while fetching data from backend : {todo.contents.message}</p>;

    } else if (todo.state === "hasValue") {

        return (
            <>
                {/* Display the title and description of the todo */}
                {todo.contents.title}
                {todo.contents.description}

                {/* Add a line break between todos */}
                <br />
            </>
        );
    }
}

// Export the App component as the default export for use in other files or components
export default App;



/*
// Another way to handle errors using ErrorBoundary and Suspense in React
function App() {
    return (
        <RecoilRoot>
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorBoundary>
                    <Todo id={1} />
                    <Todo id={2} />
                    <Todo id={2} />
                    </Suspense>
                </ErrorBoundary>
        </RecoilRoot>
    );
}
*/