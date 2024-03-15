/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
//for state management to render todo element 


/**
 * todos = [
 * {
 * title:
 * description:
 * }
 * ]
 */
 export function Todos({todos}){
    
    return        <div>
            {
                // rendering a array 
                todos.map(function(todo) {
                    return (
                        <div>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button>{todo.completed == true ? "completed" : "Mark as compleate"}</button>
                        </div>
                    )
                })
            }
        </div>
    
 }



//  one way to handle dynamic todo 
//  export function Todos(props){
//     const todos = props.todos
//     return(
//         <div>
//             <h1>Go to the gym</h1>
//             <h2>You need to go to the gym</h2>
//             <button>Mark as compleated</button>
//         </div>
        {/* for dynamic one way is iterating array element on eby one do optimisation by using for loop and third option is do use of map function 
        <div>
            <h1>{todo[0].title}</h1>
            <h2>{todo[0].description}</h2>
            <button>{todo[0]completed == true ? "completed" : "Mark as compleate"}</button>
        </div> */}

//     )
//  }