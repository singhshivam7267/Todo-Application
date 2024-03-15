import { useState } from "react";

export function CreateTodo() {
  // how to get entry from input box
  // 1st basic using get elemnt by ID using inner HTML
  // unoptimal way -- create local state variable -->> bcz it cause more rendering
  // react query
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title" onChange={function(e){
          const value = e.target.value;
          setTitle(e.target.value)
        }}      />{" "}
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="desccription" onChange={function(e){
          const value = e.target.value;
          setDesc(e.target.value)
        }}
      />{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          //axios
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify( {
              title: title,
              description: desc,
            }),
            headers: {
              "content-Type": "application/json"
            }
          })
          .then(async function(res){
            const json = await res.json();
            alert("Todo added");
          })
        }}
      >
        Add a todo
      </button>
    </div>
  );
}

// other way to export
//  module.exports{
// CreateTodo
// }
