/* eslint-disable no-unused-vars */
//when you are at one local host you can't directly acces another   local host it causing  CORS error unless your backend allow ur frontend 
// or not hit from one frontend url to backend url directly unless the backend one allow frontend to do so 
import { useEffect, useState } from 'react'
import { CreateTodo } from './copmponent/CreateTodo'
import './App.css'
import { Todos } from './copmponent/Todos'

function App() {
 
const [todos, setTodos] = useState([])
// write way
// useEffect
//wrong way -->> infinite request goes 
fetch("http://localhost:3000/todos",{mode: 'cors'})
.then(async function(res) {
  const json = await res.json();
  setTodos(json.todos)
})
  return (
    <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    {/* <Todos todos = {[{
        title: "abd",
        description:"abdabd",
        compleated:false
      },{
        title: "abd",
        description:"abdabd",
        compleated:false
      },
      ]}/> */}
    </>
  )
}

export default App












// function App() {
//     return (
//       <>
//       <CreateTodo></CreateTodo>
//       <Todos todos = {[{
//           title: "abd",
//           description:"abdabd",
//           compleated:false
//         },{
//           title: "abd",
//           description:"abdabd",
//           compleated:false
//         },
//         ]}/>
//       </>
//     )
//   }
  