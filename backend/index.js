const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());  //any one can acces it 
//when you are at one local host you can't directly acces another   local host it causing  CORS error unless your backend allow ur frontend
app.use(cors());//any one can acces it 
//to strict use 
// app.use(cors({
//     origin: "http://localhost:3000/"
// }))

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    // const todos = await todo.find({});

    res.json({
        todos: []
    })

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);



// const express = require("express")
// const { createTodo, updateTodo } = require("./types")   //import type.js file 
// // const types = require("./types")
// const { todo } = require("./db")
// const app = express()

// app.use(express.json())


 

// app.post("/todo", async (req,res) => {
//     const createPayload = req.body;
//     const parsedPayload = createTodo.safeParse(createPayload);
//     // const parsedPayload = types.createTodo 
//     if(!parsedPayload.success){
//         req.statusCode(411).json({
//             msg: "You sent the wrong inputs"
//         });
//         return;
//     }
//     //put it on mongdb
//     await todo.create({
//         title: createPayload.title,
//         description: createPayload.description,
//         compleated: false
//     }) 
//     res.json({
//         msg: "Todo Created"
//     })
// })

// app.get("/todos", async (req,res) => {
//     const todos = await todo.find();
//     console.log(todos);  //promise  because my server is any where in world so it tkae time 
// })

// app.put("/completed", async (req,res) => {
//     const updatePaylo = req.body;
//     const parsedPayload = updateTodo.safeParse(updatePayload);
//     if(!parsedPayload.success){
//         res.status(411).json({
//             msg:"you send the wrong inputs"
//         })
//         return;
//     }  // my update fn take to arg one is where to update and other is what to update . now why _id: bcz in mongodb any entry is uniquely assigned by _id not by simply id 
//     await todo.updateOne({
        
//         _id: req.body.id
//     }, {
//        $set: {compleated: true}
//     })
//     res.json({
//         msg:"Todo marked as compleated"
//     })

// })

//   app.listen(3000)
